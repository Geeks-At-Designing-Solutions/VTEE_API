var express = require("express");
var router = express.Router();
var db = require("../database");
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://0fff11374c584124a7974bbe0418531c@o1066676.ingest.sentry.io/6208519",
  tracesSampleRate: 0,
});

router.post("/", async (req, res, next) => {
  const transaction = Sentry.startTransaction({
    op: "production",
    name: "span /",
  });
  try {
    let data = req.body;
    let profileId = -1;
    console.log(data);
    profileId = await db.insertProfile({
      mergious_id: data["profile"]["mergiousId"],
      name: data["profile"]["name"],
      address: data["profile"]["address"],
      city: data["profile"]["city"],
      district: data["profile"]["district"],
      pincode: data["profile"]["pincode"],
      mobile_number: data["profile"]["mobileNumber"],
      alternate_mobile_number: data["profile"]["alternateMobileNumber"],
      email: data["profile"]["email"],
      gender: data["profile"]["gender"],
      dob: data["profile"]["dateOfBirth"],
      community: data["profile"]["tribalCommunity"],
      father_education: data["profile"]["fatherEducation"],
      father_field_of_study: data["profile"]["fatherFieldOfStudy"],
      mother_education: data["profile"]["motherEducation"],
      mother_field_of_study: data["profile"]["motherFieldOfStudy"],
      included_in_psc_ranklist: "NO",
    });

    if (data["education"].length !== 0) {
      for (const education of data["education"]) {
        db.insertEducation({
          profile_id: profileId,
          type: education["type"],
          course: education["course"],
          subject: education["subject"],
          institution: education["institution"],
          completed: education["completed"],
          grade: education["percentageOrGrade"],
        });
      }
    }

    if (data["computerAndITProficiency"].length !== 0) {
      for (const itProficiency of data["computerAndITProficiency"]) {
        db.insertITProficiency({
          profile_id: profileId,
          degree: itProficiency["degree"],
          course: itProficiency["certificate"],
          institution: itProficiency["institution"],
          programing_language: itProficiency["programmingLanguage"],
          web_social_media: itProficiency["webOrSocialMedia"],
          other: itProficiency["other"] === "" ? "N/A" : itProficiency["other"],
        });
      }
    }

    if (data["languageProficiency"].length !== 0) {
      for (const languageProficiency of data["languageProficiency"]) {
        db.insertLanguageProficiency({
          profile_id: profileId,
          language_name: languageProficiency["language"],
          read_proficiency: languageProficiency["read"],
          write_proficiency: languageProficiency["write"],
          speak_proficiency: languageProficiency["speak"],
        });
      }
    }

    if (data["training"].length !== 0) {
      for (const training of data["training"]) {
        db.insertSkillTraining({
          profile_id: profileId,
          training: training["name"],
          topic: training["topic"],
          agency: training["agency"],
          duration: training["duration"],
          sector: training["sector"],
          completed_year: training["completedYear"],
          reason_for_discontinuation:
            training["reasonForDiscontinuation"].toString(),
        });
      }
    }

    db.insertTrainingPrograms({
      profile_id: profileId,
      priority_1:
        data["trainingProgramsDetails"][0] == ""
          ? "N/A"
          : data["trainingProgramsDetails"][0],
      priority_2:
        data["trainingProgramsDetails"][1] == ""
          ? "N/A"
          : data["trainingProgramsDetails"][1],
      priority_3:
        data["trainingProgramsDetails"][2] == ""
          ? "N/A"
          : data["trainingProgramsDetails"][2],
      priority_4:
        data["trainingProgramsDetails"][3] == ""
          ? "N/A"
          : data["trainingProgramsDetails"][3],
      priority_5:
        data["trainingProgramsDetails"][4] == ""
          ? "N/A"
          : data["trainingProgramsDetails"][4],
    });

    if (data["traditionalSkills"].length === 0) {
      db.insertTraditionalSkills({
        profile_id: profileId,
        tribal_agriculture: 0,
        animal_husbandry: 0,
        handloom: 0,
        food_processing: 0,
        honey_collection: 0,
        bamboo_craft: 0,
        tribal_housing: 0,
        treatment: 0,
        identification: 0,
        medicine_preparation: 0,
      });
    } else {
      db.insertTraditionalSkills({
        profile_id: profileId,
        tribal_agriculture: data["traditionalSkills"].includes(
          "Tribal Agriculture"
        )
          ? 1
          : 0,
        animal_husbandry: data["traditionalSkills"].includes("Animal Husbandry")
          ? 1
          : 0,
        handloom: data["traditionalSkills"].includes(
          "Handloom/ Handicrafts/ Textile"
        )
          ? 1
          : 0,
        food_processing: data["traditionalSkills"].includes("Food Processing")
          ? 1
          : 0,
        honey_collection: data["traditionalSkills"].includes("Honey Collection")
          ? 1
          : 0,
        bamboo_craft: data["traditionalSkills"].includes("BambooCrafts")
          ? 1
          : 0,
        tribal_housing: data["traditionalSkills"].includes(
          "Traditional Tribal Housing"
        )
          ? 1
          : 0,
        treatment: data["traditionalSkills"].includes(
          "Tribal Medicity Treatment"
        )
          ? 1
          : 0,
        identification: data["traditionalSkills"].includes(
          "Identification of medicinal plants"
        )
          ? 1
          : 0,
        medicine_preparation: data["traditionalSkills"].includes(
          "Preparation of medicines"
        )
          ? 1
          : 0,
      });
    }

    db.updateIncludedInPSCRanklist([
      data["previousEmployement"]["includedInPSCRankList"],
      profileId,
    ]);

    if (
      data["previousEmployement"]["previousEmployementDetails"].length !== 0
    ) {
      for (const employement of data["previousEmployement"][
        "previousEmployementDetails"
      ]) {
        db.insertEmployementData({
          profile_id: profileId,
          position: employement["position"],
          employer: employement["employer"],
          nature: employement["natureOfJob"],
          income: employement["monthlyIncome"],
          reason_for_discontinuation:
            employement["reasonForDiscontinuation"].toString(),
        });
      }
    }

    if (data["informalWorkExperience"].length !== 0) {
      for (const informalWork of data["informalWorkExperience"]) {
        db.insertInformalWorkExperience({
          profile_id: profileId,
          sector: informalWork["sector"],
          position: informalWork["position"],
          years: informalWork["years"],
          skills: informalWork["skills"],
          community_service: informalWork["communityService"],
          roles_in_community_service: informalWork["communityServiceRoles"],
          guarantee_scheme: informalWork["employementGuaranteeScheme"],
        });
      }
    }

    db.insertEmployementInterests({
      profile_id: profileId,
      interested_field: data["interestsInEmployement"]["intresetedField"],
      relocate: data["interestsInEmployement"]["relocate"],
      outside_state: data["interestsInEmployement"]["workOutsideState"],
      outside_country: data["interestsInEmployement"]["workOutsideCountry"],
      job_role: data["interestsInEmployement"]["specificJobRole"],
    });

    if (Object.keys(data["capacityDevelopmentRequired"]).length !== 0) {
      if (
        data["capacityDevelopmentRequired"]["capacityDevelopmentFields"]
          .length === 0
      ) {
        db.insertCapacityDevelopment({
          profile_id: profileId,
          communication: 0,
          computer: 0,
          job_skill: 0,
          soft_skill: 0,
          specific_skill_training:
            data["capacityDevelopmentRequired"]["specificSkilltraining"],
        });
      } else {
        db.insertCapacityDevelopment({
          profile_id: profileId,
          communication: data["capacityDevelopmentRequired"][
            "capacityDevelopmentFields"
          ].includes("Communication Skills")
            ? 1
            : 0,
          computer: data["capacityDevelopmentRequired"][
            "capacityDevelopmentFields"
          ].includes("Computer & IT skills")
            ? 1
            : 0,
          job_skill: data["capacityDevelopmentRequired"][
            "capacityDevelopmentFields"
          ].includes("Job oriented skills")
            ? 1
            : 0,
          soft_skill: data["capacityDevelopmentRequired"][
            "capacityDevelopmentFields"
          ].includes("Life skills / Soft Skills")
            ? 1
            : 0,
          specific_skill_training:
            data["capacityDevelopmentRequired"]["specificSkilltraining"],
        });
      }
    }

    db.insertCulturalTalents({
      profile_id: profileId,
      singing: data["culturalTalents"]["singing"],
      dancing: data["culturalTalents"]["dancing"],
      performing_arts: data["culturalTalents"]["performingArts"],
      other: data["culturalTalents"]["otherSkills"],
    });

    if (data["entrepreneurshipInterests"] !== "N/A") {
      db.insertEntrepreneurship({
        profile_id: profileId,
        field: data["entrepreneurshipInterests"]["interestedField"],
        description: data["entrepreneurshipInterests"]["planDescription"],
        sector:
          data["entrepreneurshipInterests"]["previousExperience"] === "N/A"
            ? "N/A"
            : data["entrepreneurshipInterests"]["previousExperience"]["sector"],
        years:
          data["entrepreneurshipInterests"]["previousExperience"] === "N/A"
            ? "N/A"
            : data["entrepreneurshipInterests"]["previousExperience"]["years"],
        activities:
          data["entrepreneurshipInterests"]["previousExperience"] === "N/A"
            ? "N/A"
            : data["entrepreneurshipInterests"]["previousExperience"][
                "activities"
              ],
      });
    }

    res.end();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
});

router.post("/alternate", async (req, res, next) => {
  const transaction = Sentry.startTransaction({
    op: "production",
    name: "post /alternate",
  });
  try {
    let data = req.body;
    console.log(data);
    db.insertTrainingProgramsAlternate({
      mergious_id: data["mergiousId"],
      priority_1:
        data["trainingProgramsDetails"][0] == ""
          ? "N/A"
          : data["trainingProgramsDetails"][0],
      priority_2:
        data["trainingProgramsDetails"][1] == ""
          ? "N/A"
          : data["trainingProgramsDetails"][1],
      priority_3:
        data["trainingProgramsDetails"][2] == ""
          ? "N/A"
          : data["trainingProgramsDetails"][2],
      priority_4:
        data["trainingProgramsDetails"][3] == ""
          ? "N/A"
          : data["trainingProgramsDetails"][3],
      priority_5:
        data["trainingProgramsDetails"][4] == ""
          ? "N/A"
          : data["trainingProgramsDetails"][4],
    });
    res.end();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
});

router.get("/", async (req, res, next) => {
  const transaction = Sentry.startTransaction({
    op: "production",
    name: "get /",
  });
  try {
    db.getEndPoint().then((data) => {
      res.json(data[0]);
    });
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
});

module.exports = router;
