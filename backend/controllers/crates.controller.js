import Crate from "../models/crates.model.js"

//id : {type : String},content:{type : Number}[This can be used to store the nfts], price:{type : String}


export const getAllCrate = async(req,res) => {//for market place access
    try {
        const crateData = await Crate.find({});

        if(!crateData){
            return res.status(404).json({message: "Crate database is empty"})
        };
        res.status(200).json(crateData);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getOneCrate = async(req,res) => {//for user to buy
    try {
        const id = req.params.id;
        const crateData = await Crate.findById(id);

        if(!crateData){
            return res.status(404).json({message: "Crate Data is not found in the database"})
        };
        res.status(200).json(crateData);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

// export const updateCrate = async(req,res) => {
//     try {
//         const id = req.params.id;
//         const userData = await Crate.findByIdAndUpdate(id, req.body, {new:true});

//         if(!userData){
//             return res.status(404).json({message: "User data not found"})
//         };
//         res.status(200).json(userData);
//     } catch (error) {
//         res.status(500).json({message: error});
//     }
// }

export const deleteCrate = async(req,res) => {//to remove from market place after user buys
    try {
        const id = req.params.id;
        const crateData = await Crate.findByIdAndDelete(id);

        if(!crateData){
            return res.status(404).json({message: "Crate Not found"})
        };
        res.status(200).json({message: "It is deleted"});
    } catch (error) {
        res.status(500).json({message: error});
    }
}