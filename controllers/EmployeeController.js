const { response } = require('express')
const Employee = require('../models/Employee')

//mostrar la lista de proveedores
const index = (req, res, next)=>{
    Employee.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:'A Ocurrido un Error!'
        })
    })

}

//mostrar un proveedor
const show = (req, res, next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message: 'A Ocurrido un Error!!'
        })
    })
}

//Agregando un Proveedor
const store = (req, res, next)=>{
    let employee = new Employee({
        namesupplier: req.body.namesupplier,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone
    })

    if(req.files){
        let path=''
        req.files.forEach(function(files, index, arr){
            path = path + files.path + ','
        })
        path=path.substring(0,path.lastIndexOf(","))
        employee.filenam = path
    }


    employee.save()

    .then(reponse=>{
        res.json({
            message:'** Proveedor Agregado Correctamente **'
        })
    })
    .catch(error=>{
        res.json({
            message: 'A Ocurrido un Error, al agregar Proveedor!!!'
        })
    })
}

//actualizando un proveedor
const update = (req, res, next)=>{
    let employeeID = req.body.employeeID

    let updatedDate ={
        namesupplier: req.body.namesupplier,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone
    }
    Employee.findByIdAndUpdate(employeeID,{$set: updatedData})
    .then(()=>{
        res.json({
            message: '*** Proveedor Modificado Correctamente! ***'
        })
    })
    .catch(error=>{
        res.json({
            message: 'A Ocurrido un Error, al modificar Proveedor!!!!'
        })
    })
}

//Eliminando un proveedor
const destroy = (req, res, next)=>{
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.json({
            message:'*** Proveedor Eliminado! ***'
        })
    })
    .catch(error=>{
        res.json({
            message: 'A Ocurrido un Error, al Eliminar el Proveedor!!!!'
        })
    })
}

module.exports={
    index, show, store, update, destroy
}


