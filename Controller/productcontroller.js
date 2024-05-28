const productschema = require("../Schema/productschema");

const empform = (req, res) => {
  const prodetail = new productschema({
    name: req.body.name,
    empid: req.body.id,
    salary: req.body.salary,
    designation: req.body.designation,
  });

  prodetail
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

const viewform = (req, res) => {
  productschema
    .find()
    .then((data) => {
      res.json({ msg: "obtained", data: data });
    })

    .catch((err) => {
      res.json({
        msg: "not obtained",
        err: err,
      });
    });
};

const editfind = (req, res) => {
  const id = req.params.id;

  productschema.findById(id).then((data) => {
    res.json({
      msg: "Data obtained",
      data: data,
    });
  });
};

const findbyidandupdate = (req, res) => {
  const empid = req.params.empid;
  const {name,id,salary,designation}=req.body;
  console.log(req.body);
  productschema
    .findByIdAndUpdate(
      empid,
      {
        name :name,
        empid :id,
        salary :salary,
        designation:designation,
      },
      { new: true }
    )
    .then((data) => {
      if(!data){
        return res.status(404).json({msg:"Data not found"})
      }
      console.log(data);
      res.json({
        msg: "Data Update",
        data: data,
      });
    })
    .catch((err) => {
      console.error("Error:",err)
      res.json({
        msg: " not Update",
        err: err.message,
      });
    });
};

const findbyidanddelete = (req, res) => {
  const id = req.params.id;
  productschema
    .findByIdAndDelete(id)
    .then((data) => {
      res.json({
        msg: "Data Deleted",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        msg: " not Deleted",
        err: err,
      });
    });
};

module.exports = {
  empform,
  viewform,
  editfind,
  findbyidandupdate,
  findbyidanddelete,
};
