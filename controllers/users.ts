import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {

  const users = await User.findAll();

  res.json({
    users
  });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if(!user){
    return res.status(404).json({
      msg: 'No existe el usuario con el id ' + id
    })
  }

  res.json({
    user,
  });
};

export const createUser = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "createUser",
    body,
  });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const {body} = req
  res.json({
    msg: "getUser",
    id,
  });
};

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
      msg: "deleteUser",
      id
    });
  };