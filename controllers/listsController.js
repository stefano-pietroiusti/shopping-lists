//const Joi = require("joi"); for validating payloads in each method
const ShopppingModel = require('../models');

const welcome = 'Shopping list api. GET OPTIONS or try a sample GET on https://shopping-list-api.stefanopietroiu.repl.co/lists/ or https://shopping-list-api.stefanopietroiu.repl.co/lists/tuesday.';

exports.getWelcome = (req, res) => {
  res.status(200).send(welcome);
};

exports.getLists = async (req, res) => {
     console.log('getLists');
  try {
    const result = await ShopppingModel.getLists();
    if (!result) {
       res.status(404).send('Not found');
    }
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getListById = async (req, res) => {
  try {
    console.log('getListById');
    const result = await ShopppingModel.getListById(req.params.id);
    console.log(result);
    if (!result) {
       res.status(404).send('Not found');
    }
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e);
  }
};

//To be implemented
exports.getProductById = (req, res) => {
    res.status(200).send(req.params.id);
}

exports.insertList = (req, res) => {
    res.status(204).send();
}
 
exports.insertProduct = (req, res) => {
    res.status(204).send();
}

exports.putListById = (req, res) => {
    res.status(204).send();
}

exports.patchListById = (req, res) => {
    res.status(204).send();
}
 
exports.removeListById = (req, res) => {
    res.status(204).send(req.params.id);
}
