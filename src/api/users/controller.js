import User from "../../models.js";


export const create = (req, res) => {
  const name = req.params.name || ""
  if (!name.length) {
    return res.status(400).json({ error: "Inocorrect name" })
  }
  User.create({
    name: name,
  }).then((user) => res.status(201).json(user))
}

export const index = (req, res) => {
  User.findAll().then((users) => res.json(users))
}

export const show = (req, res) => { 
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({ error: "Incorrect id" });
  }

  User.findeOne({
    where: {
      id: id
    }
  }).then(user => {
    if (!user) {
      return res.status(400).json({ error: "NO User" });
    }
    return res.json(user);
  });
};
export const destroy = (req, res) => { 
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({ error: "Inocorrect id" });
  }

  User.destroy({
    where: {
      id: id
    }
  }).then(() => res.status(204).send());
};

export const update = (req, res) => {
  return res.send();
}
