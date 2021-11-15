var express = require('express');
var router = express.Router();
var db = require('../database');

router.post('/', async (req, res, next)=>{
  let data = req.body;
  let profileId = -1;
  console.log(data);
  profileId = await db.insertProfile(
    {
      "mergious_id":data["profile"]["mergiousId"],
      "name":data["profile"]["name"],
      "address":data["profile"]["address"],
      "city":data["profile"]["city"],
      "district":data["profile"]["district"],
      "pincode":data["profile"]["pincode"],
      "mobile_number":data["profile"]["mobileNumber"],
      "alternate_mobile_number":data["profile"]["alternateMobileNumber"],
      "email":data["profile"]["email"],
      "gender":data["profile"]["gender"],
      "dob":data["profile"]["dateOfBirth"],
      "community":data["profile"]["tribalCommunity"],
      "father_education":data["profile"]["fatherEducation"],
      "father_field_of_study":data["profile"]["fatherFieldOfStudy"],
      "mother_education":data["profile"]["motherEducation"],
      "mother_field_of_study":data["profile"]["motherFieldOfStudy"],
    }
  );

  if(data["education"].length !== 0){
    for(const education of data["education"]){
    db.insertEducation(
        {
          "profile_id":profileId,
          "type":education["type"],
          "course":education["course"],
          "subject":education["subject"],
          "institution":education["institution"],
          "completed":education["completed"],
          "grade":education["percentageOrGrade"]
        }
      );
    }
  }

  if(data["computerAndITProficiency"].length !== 0){
    for(const itProficiency of data["computerAndITProficiency"]){
    db.insertITProficiency(
        {
          "profile_id":profileId,
          "degree":itProficiency["degree"],
          "course":itProficiency["certificate"],
          "institution":itProficiency["institution"],
          "programing_language":itProficiency["programmingLanguage"],
          "web_social_media":itProficiency["webOrSocialMedia"],
          "other":itProficiency["other"] === "" ? "N/A": itProficiency["other"]
        }
      );
    }
  }

  if(data["languageProficiency"].length !== 0){
    for(const languageProficiency of data["languageProficiency"]){
    db.insertLanguageProficiency(
        {
          "profile_id":profileId,
          "language_name":languageProficiency["language"],
          "read_proficiency":languageProficiency["read"],
          "write_proficiency":languageProficiency["write"],
          "speak_proficiency":languageProficiency["speak"],
        }
      );
    }
  }

  if(data["training"].length !== 0){
    for(const training of data["training"]){
    db.insertSkillTraining(
        {
          "profile_id":profileId,
          "training":training["name"],
          "topic":training["topic"],
          "agency":training["agency"],
          "duration":training["duration"],
          "sector":training["sector"],
          "completed_year":training["completedYear"],
          "reason_for_discontinuation":training["reasonForDiscontinuation"].toString(),
        }
      );
    }
  }

  if(data["trainingProgramsDetails"].length === 0){
    db.insertTrainingPrograms(
      {
        "profile_id":profileId,
        "organic_farming":0,
        "fruits_vegetable_processing":0,
        "arc_gas_welding":0,
        "pipe_fabricator":0,
        "refrigeration_ac_mechanic":0,
        "tinkering_painting":0,
        "auto_diagnosis_repair":0,
        "cnc_operator":0,
        "assembly_line_operator":0,
        "fabric_textile":0,
        "nursing":0,
        "panchakarma":0,
        "animation":0,
        "digital_marketing":0,
        "digital_media_production":0,
        "bakery":0,
        "architecture":0,
        "iata":0,
      }
    );    
  }else{
    db.insertTrainingPrograms(
      {
        "profile_id":profileId,
        "organic_farming":data["trainingProgramsDetails"].includes("Organic Farming") ? 1 : 0,
        "fruits_vegetable_processing":data["trainingProgramsDetails"].includes("Fruits and Vegetables Processing") ? 1 : 0,
        "arc_gas_welding":data["trainingProgramsDetails"].includes("Arc & Gas Welder") ? 1 : 0,
        "pipe_fabricator":data["trainingProgramsDetails"].includes("Pipe Fabricator") ? 1 : 0,
        "refrigeration_ac_mechanic":data["trainingProgramsDetails"].includes("Refrigeration Air Condition Mechanic") ? 1 : 0,
        "tinkering_painting":data["trainingProgramsDetails"].includes("Tinkering & Painting") ? 1 : 0,
        "auto_diagnosis_repair":data["trainingProgramsDetails"].includes("Auto Diagnosis & Repair") ? 1 : 0,
        "cnc_operator":data["trainingProgramsDetails"].includes("CNC Operator") ? 1 : 0,
        "assembly_line_operator":data["trainingProgramsDetails"].includes("Assembly Line Operator & Through Hole Assembly Operator") ? 1 : 0,
        "fabric_textile":data["trainingProgramsDetails"].includes("Fabric and Textile Designing") ? 1 : 0,
        "nursing":data["trainingProgramsDetails"].includes("Nursing Assistant") ? 1 : 0,
        "panchakarma":data["trainingProgramsDetails"].includes("Panchakarma Technician") ? 1 : 0,
        "animation":data["trainingProgramsDetails"].includes("Animation & Multimedia Assistant") ? 1 : 0,
        "digital_marketing":data["trainingProgramsDetails"].includes("Digital Marketing") ? 1 : 0,
        "digital_media_production":data["trainingProgramsDetails"].includes("Digital Media Production") ? 1 : 0,
        "bakery":data["trainingProgramsDetails"].includes("Bakery Course") ? 1 : 0,
        "architecture":data["trainingProgramsDetails"].includes("The Architecture & Civil 2 D Drafting with Auto Cad") ? 1 : 0,
        "iata":data["trainingProgramsDetails"].includes("IATA Cargo Supply Chain & Transport Modes") ? 1 : 0,
      }
    );  
  }

  if(data["traditionalSkills"].length === 0){
    db.insertTraditionalSkills(
      {
        "profile_id":profileId,
        "tribal_agriculture":0,
        "animal_husbandry":0,
        "handloom":0,
        "food_processing":0,
        "honey_collection":0,
        "bamboo_craft":0,
        "tribal_housing":0,
        "treatment":0,
        "identification":0,
        "medicine_preparation":0,
      }
    );    
  }else{
    db.insertTraditionalSkills(
      {
        "profile_id":profileId,
        "tribal_agriculture":data["traditionalSkills"].includes("Tribal Agriculture") ? 1 : 0,
        "animal_husbandry":data["traditionalSkills"].includes("Animal Husbandry") ? 1 : 0,
        "handloom":data["traditionalSkills"].includes("Handloom/ Handicrafts/ Textile") ? 1 : 0,
        "food_processing":data["traditionalSkills"].includes("Food Processing") ? 1 : 0,
        "honey_collection":data["traditionalSkills"].includes("Honey Collection") ? 1 : 0,
        "bamboo_craft":data["traditionalSkills"].includes("BambooCrafts") ? 1 : 0,
        "tribal_housing":data["traditionalSkills"].includes("Traditional Tribal Housing") ? 1 : 0,
        "treatment":data["traditionalSkills"].includes("Tribal Medicity Treatment") ? 1 : 0,
        "identification":data["traditionalSkills"].includes("Identification of medicinal plants") ? 1 : 0,
        "medicine_preparation":data["traditionalSkills"].includes("Preparation of medicines") ? 1 : 0,
      }
    );  
  }

  if(data["previousEmployement"].length !== 0){
    for(const employement of data["previousEmployement"]){
    db.insertEmployementData(
        {
          "profile_id":profileId,
          "position":employement["position"],
          "employer":employement["employer"],
          "nature":employement["natureOfJob"],
          "income":employement["monthlyIncome"],
          "reason_for_discontinuation":employement["reasonForDiscontinuation"].toString(),
        }
      );
    }
  }

  if(data["informalWorkExperience"].length !== 0){
    for(const informalWork of data["informalWorkExperience"]){
    db.insertInformalWorkExperience(
        {
          "profile_id":profileId,
          "sector":informalWork["sector"],
          "position":informalWork["position"],
          "years":informalWork["years"],
          "skills":informalWork["skills"],
          "community_service":informalWork["communityService"],
          "roles_in_community_service":informalWork["communityServiceRoles"],
          "guarantee_scheme":informalWork["employementGuaranteeScheme"],
        }
      );
    }
  }

  db.insertEmployementInterests(
    {
      "profile_id":profileId,
      "interested_field":data["interestsInEmployement"]["intresetedField"],
      "relocate":data["interestsInEmployement"]["relocate"],
      "outside_state":data["interestsInEmployement"]["workOutsideState"],
      "outside_country":data["interestsInEmployement"]["workOutsideCountry"],
      "job_role":data["interestsInEmployement"]["specificJobRole"],
    }
  );

  if(Object.keys(data["capacityDevelopmentRequired"]).length !== 0){
    if(data["capacityDevelopmentRequired"]["capacityDevelopmentFields"].length === 0){
      db.insertCapacityDevelopment(
        {
          "profile_id":profileId,
          "communication":0,
          "computer":0,
          "job_skill":0,
          "soft_skill":0,
          "specific_skill_training":data["capacityDevelopmentRequired"]["specificSkilltraining"],
        }
      );
    }else{
      db.insertCapacityDevelopment(
        {
          "profile_id":profileId,
          "communication":data["capacityDevelopmentRequired"]["capacityDevelopmentFields"].includes("Communication Skills") ? 1 : 0,
          "computer":data["capacityDevelopmentRequired"]["capacityDevelopmentFields"].includes("Computer & IT skills") ? 1 : 0,
          "job_skill":data["capacityDevelopmentRequired"]["capacityDevelopmentFields"].includes("Job oriented skills") ? 1 : 0,
          "soft_skill":data["capacityDevelopmentRequired"]["capacityDevelopmentFields"].includes("Life skills / Soft Skills") ? 1 : 0,
          "specific_skill_training":data["capacityDevelopmentRequired"]["specificSkilltraining"],
        }
      );
    }
  }

  db.insertCulturalTalents(
    {
      "profile_id":profileId,
      "singing":data["culturalTalents"]["singing"],
      "dancing":data["culturalTalents"]["dancing"],
      "performing_arts":data["culturalTalents"]["performingArts"],
      "other":data["culturalTalents"]["otherSkills"],
    }
  );

   if(data["entrepreneurshipInterests"] !== 'N/A'){
    db.insertEntrepreneurship(
      {
        "profile_id":profileId,
        "field":data["entrepreneurshipInterests"]["interestedField"],
        "description":data["entrepreneurshipInterests"]["planDescription"],
        "sector":data["entrepreneurshipInterests"]["previousExperience"] === "N/A" ? "N/A" : data["entrepreneurshipInterests"]["previousExperience"]["sector"],
        "years":data["entrepreneurshipInterests"]["previousExperience"] === "N/A" ? "N/A" : data["entrepreneurshipInterests"]["previousExperience"]["years"],
        "activities":data["entrepreneurshipInterests"]["previousExperience"] === "N/A" ? "N/A" : data["entrepreneurshipInterests"]["previousExperience"]["activities"],
      }
    );
  }

  res.end();
});

router.get('/', async (req, res, next)=>{
  db.getEndPoint().then((data)=>{
    res.json(data[0]);
  });
})

module.exports = router;
