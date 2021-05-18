import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.json({
    users,
  });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({
      msg: "No existe el usuario con el id " + id,
    });
  }

  res.json({
    user,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const existeEmail = await User.findOne({
      where: {
        email: body.email,
      },
    });

    if (existeEmail) {
      return res.status(400).json({
        msg: "Ya existe el email que intenta registrar",
      });
    }

    const user = new User(body);
    await user.save();

    res.json({
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Ocurrió un error",
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        msg: "No existe un usuario con el id " + id,
      });
    }

    await user.update(body)

    res.json({
      msg: "Usuario actualizado correctamente",
      user
    })
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Ocurrió un error",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        msg: "No existe un usuario con el id " + id,
      });
    }

    await user.update({state: false})

    res.json({
      msg: "Usuario eliminado correctamente",
      user
    })

  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Ocurrió un error",
    });
  }
};
