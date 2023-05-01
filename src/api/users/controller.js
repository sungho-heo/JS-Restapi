let users = [
    {
        id: 1,
        name: "Joy"
    },
    {
        id: 2,
        name: "Bob"
    },
    {
        id: 3,
        name: "James",
    },
    {
        id: 4,
        name: "god",
    },
]

export const index = (req,res) => res.json(users);
export const show = (req,res) =>{
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({ error: "Incorrect id" })
  }
  let user = users.filter((user) => user.id === id)[0]
  if (!user) {
    return res.status(404).json({ error: "Unknown user" })
  }
  return res.json(user);
};

export const userRemove = (req,res)=>{
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({ error: "Incorrect id" })
  }
  let userIdx = users.findIndex((userId) => userId.id === id)
  if (userIdx === -1) {
    return res.status(404).json({ error: "Unkwon user" })
  }
  users.splice(userIdx, 1)
  return res.status(204).send()
};

export const userAdd = (req,res) =>{
    const name = req.body.name || "";
    if (!name.length) {
        return res.status(400).json({ error: "Plz Update user name" });
    } 
    const id = users.reduce((maxIdx, user) =>{
      return user.id > maxIdx ? user.id:maxIdx;
    },0) + 1;
    const newUser = {
      id: id,
      name: name,
    };
    users.push(newUser);
    return res.status(201).json(newUser);
};