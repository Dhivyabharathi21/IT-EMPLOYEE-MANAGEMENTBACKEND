const schemaemp = require("../Schema/schema");

const empregister = (req, res) => {
  console.log(req.body);
  const detail = new schemaemp({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  detail
    .save()
    .then((data) => {
      res.json({
        msg: "Data Saved",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        msg: "Not Saved",
        err: err,
      });
    });
};

const viewemp=(req,res)=>
{
    schemaemp
    .find()
    .then ((data)=>
    {res.json
       ({ msg:"obtained",
        data:data,})
    })

.catch((err)=>{
    res.json({
        msg:"not obtained",
        err:err
    })
})}


const emplogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body);
    const emp = await schemaemp.findOne({ email: email });
    // console.log(emp);
    if (emp) {
      if (emp.password == password) {
        return res.status(200).json({
          message: "Login successful",emp
        });
      } else {
        return res.status(401).json({ message: "Password is incorrect" });
      }
    } else {
      return res.status(404).json({ message: " not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const empmentfindid = (req, res) => {
  const id = req.params.id;

  schemaemp.findById(id).then((data) => {
    res.json({
      msg: "Data obtained",
      data: data,
    });
  })
  .catch((err)=>{
    res.json({
      msg:"not obtained",
      err:err
    })
  })
};

module.exports = { empregister, emplogin ,viewemp,empmentfindid };
