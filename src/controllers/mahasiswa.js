const express = require("express");
const Mahasiswa = require("../models/mahasiswa");

const Home =  async (req, res) => {
    try {
  
      const dataMahasiswa = await Mahasiswa.find();
      res.json({
        statusbar: "success",
        data: dataMahasiswa,
      })
   
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message });
    }
  }

  const SearchId =  async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find({_id : req.params.id});
    if(mahasiswa.length == 0) return res.status(404).json({
        status : 404,
        message : `${req.params.nama} Not Found`,
        data : []
       })

    res.json({
        status : 200,
        message : 'Success',
        data : mahasiswa
    });

  } catch (err) {
    res.json({ status: 500, message: err.message });
  }
}

const DeleteMahasiswa = async (req, res) => {
    try {
      const mahasiswa = await Mahasiswa.findByIdAndRemove({_id : req.params.id});
      if (mahasiswa.deletedCount === 0) {
        return res.status(404).json({
          status: "Fail",
          message: "Data Not Found"
        });
      }
      res.status(200).json({
        status: "Success",
        message: "Data Deleted",
      })
    } catch (err) {
      res.status(500).json({
        status: "Error",
        message: err.message
      })
    }
  }

  const CreateMahasiswa =  async (req, res) => {
    try {
     const alreadyData = await Mahasiswa.findOne({nama : req.body.nama});
     if(alreadyData) return res.status(409).json({
      status : 409,
      message : `${req.body.nama} Already Exist`,
     })
  
     const mahasiswa = await Mahasiswa.create(req.body);
     res.status(201).json({
        status : 201,
        message : 'Success',
        data : mahasiswa
     })
    }catch(err){
      res.status(500).send({
        status : "Error",
        message : err.message
      })
    }
  }

  const UpdateMahasiswa =  async (req, res) => {
    try {
      const mahasiswa = await Mahasiswa.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!mahasiswa) {
        return res.status(404).json({
          status: "Fail",
          message: "Data Not Found"
        });
      }
      res.status(201).json({
        status: "Success",
        message: "Data Updated",
        data: mahasiswa
      })
    } catch (err) {
      res.status(500).json({
        status: "Error",
        message: err.message
      })
    }
  }
module.exports = {Home,SearchId,DeleteMahasiswa,CreateMahasiswa,UpdateMahasiswa}