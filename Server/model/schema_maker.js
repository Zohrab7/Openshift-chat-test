module.exports.ChemaMaker= (chatschema,data)=>{
    const chatDataRef = new chatschema(data);
    chatDataRef.save((err,res) => !err ? console.log(`Now my data >${res}< is saved in the database`) : console.log(err));
};

