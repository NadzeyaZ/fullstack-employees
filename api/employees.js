import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "#db/queries/employees";
const router = express.Router();
export default router;

// TODO: this file!

router.get("/", async (req, res) => {
  const allEmployees = await getEmployees();
  return res.send(allEmployees);
});

router.post("/", async (req, res) => {
  if (!req.body) {
    return res.status(400).send();
  }
  if (!req.body.name) {
    return res.status(400).send();
  }
  const emp = await createEmployee(req.body);
  return res.status(201).send(emp);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const emp = await getEmployee(id);
  if (!emp) {
    return res.status(404).send();
  }
  return res.status(200).send(emp);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const emp = await deleteEmployee(id);
  if (!emp) {
    return res.status(404).send();
  }
  return res.status(204).send(emp);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  if (!req.body) {
    return res.status(400).send();
  }
  if (!req.body.name) {
    return res.status(400).send();
  }
  const emp = await updateEmployee(id, req.body);
  if (!emp) {
    return res.status(404).send();
  }
  return res.status(200).send(emp);
});
