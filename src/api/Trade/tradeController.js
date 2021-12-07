const mongoose=require("mongoose");

const tradeModule=require("../../models/Trade_Category");
const siteInfo=require("../../models/siteModel");
const User=require("../../models/user");
const workerSatus=require("../../models/workerStatus")
const {
    successResponseWithData,
    ErrorResponse,
} = require("./../../lib/apiresponse");
const { updateOne } = require("../../models/Trade_Category");

const allTradeCategory={
    
    getTradeDataPage:async (req,res)=>{
            try{
                const tradeData=await tradeModule.find({status:true});
                return successResponseWithData(res,"Success",tradeData);
            }catch(error){
                return ErrorResponse(res,error);
            }
    },
    addSiteToTrade:async(req,res)=>{

        try{
            const newSchema=new tradeModule({
                tradeName:req.body.tradeName
            });
            const dat = await newSchema.save();
            return successResponseWithData(res,"Success",dat);
        }catch(error){
            return ErrorResponse(res,error);
        }

    },
    // addTaskDisc:async(req,res)=>{
    //     try{
    //         // const tardeCategoryName=await tradeModule.findOne({tradeName:req.body.tradeName})
    //         const siteCodeByuser=await siteInfo.findOne({site_code:req.body.site_code})
    //         const newWorkerSchema=await workerSatus.updateOne({})
         

    //     }catch(error){
    //         console.log(error)
    //     }
    // },


}
module.exports=allTradeCategory;