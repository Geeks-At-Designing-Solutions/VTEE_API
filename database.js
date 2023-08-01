var mysql = require("mysql2");
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://0fff11374c584124a7974bbe0418531c@o1066676.ingest.sentry.io/6208519",
  tracesSampleRate: 0,
});

//db config
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "82.180.152.204",
  user: "u250186539_vtee",
  password: "Vtee@123",
  database: "u250186539_vtee",
});

let vteeDBOperations = {};

// for insert into table use this example
vteeDBOperations.insertProfile = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert profile",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query("INSERT INTO profile SET ?", data, (err, res) => {
            if (err) {
              Sentry.captureException(err);
              console.log(err);
            }
            console.log("Last insert Profile ID:", res.insertId);
            resolve(res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert profile: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertEducation = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert education",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query("INSERT INTO education SET ?", data, (err, res) => {
            if (err) {
              Sentry.captureException(err);
              console.log(err);
            }
            console.log("Last insert Education ID:", res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert education: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertITProficiency = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert IT Proficiency",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query("INSERT INTO it_proficiency SET ?", data, (err, res) => {
            if (err) {
              Sentry.captureException(err);
              console.log(err);
            }
            console.log("Last insert IT Proficiency ID:", res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert it_proficency: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertLanguageProficiency = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert language Proficiency",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query(
            "INSERT INTO language_proficiency SET ?",
            data,
            (err, res) => {
              if (err) {
                Sentry.captureException(err);
                console.log(err);
              }
              console.log("Last insert Language Proficiency ID:", res.insertId);
            }
          );
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert language_proficency: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertSkillTraining = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert skill training",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query("INSERT INTO skill_training SET ?", data, (err, res) => {
            if (err) {
              Sentry.captureException(err);
              console.log(err);
            }
            console.log("Last insert Skill Training ID:", res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert skill_training: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertTrainingPrograms = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert training programs",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query(
            "INSERT INTO training_programs SET ?",
            data,
            (err, res) => {
              if (err) {
                Sentry.captureException(err);
                console.log(err);
              }
              console.log("Last insert Training Programs ID:", res.insertId);
            }
          );
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert training_programs: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertTraditionalSkills = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert Traditional skills",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query(
            "INSERT INTO traditional_skill SET ?",
            data,
            (err, res) => {
              if (err) {
                Sentry.captureException(err);
                console.log(err);
              }
              console.log("Last insert Traditional Skill ID:", res.insertId);
            }
          );
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert traditional_skills: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.updateIncludedInPSCRanklist = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert PSC Ranklist",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query(
            "UPDATE profile SET included_in_psc_ranklist = ? WHERE profile_id = ?",
            data,
            (err, res) => {
              if (err) {
                Sentry.captureException(err);
                console.log(err);
              }
              console.log("Update psc_ranklist ID:", data[1]);
            }
          );
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert employement_data: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertEmployementData = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert employement data",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query("INSERT INTO employement_data SET ?", data, (err, res) => {
            if (err) {
              Sentry.captureException(err);
              console.log(err);
            }
            console.log("Last insert Employement Data ID:", res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert employement_data: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertInformalWorkExperience = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert informal work",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query("INSERT INTO informal_sector SET ?", data, (err, res) => {
            if (err) {
              Sentry.captureException(err);
              console.log(err);
            }
            console.log("Last insert Informal Experience ID:", res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert informal_sector: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertEmployementInterests = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert employement interests",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query(
            "INSERT INTO employement_interest SET ?",
            data,
            (err, res) => {
              if (err) {
                Sentry.captureException(err);
                console.log(err);
              }
              console.log(
                "Last insert Employement Interests ID:",
                res.insertId
              );
            }
          );
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert employement_interest: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertCapacityDevelopment = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert capacity development",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query(
            "INSERT INTO capacity_development SET ?",
            data,
            (err, res) => {
              if (err) {
                Sentry.captureException(err);
                console.log(err);
              }
              console.log("Last insert Capacity Development ID:", res.insertId);
            }
          );
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert capacity_development: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertCulturalTalents = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert cultural interests",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query(
            "INSERT INTO cultural_interests SET ?",
            data,
            (err, res) => {
              if (err) {
                Sentry.captureException(err);
                console.log(err);
              }
              console.log("Last insert Cultural Interests ID:", res.insertId);
            }
          );
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert cultural_interests: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertEntrepreneurship = (data) => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "insert entrepreneurship",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query("INSERT INTO entrepreneurship SET ?", data, (err, res) => {
            if (err) {
              Sentry.captureException(err);
              console.log(err);
            }
            console.log("Last insert Entrepreneurship ID:", res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error doing insert entrepreneurship: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.getEndPoint = () => {
  return new Promise((resolve, reject) => {
    const transaction = Sentry.startTransaction({
      op: "production",
      name: "fetch endpoint",
    });
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query("SELECT * FROM config WHERE flag = 1", (err, res) => {
            if (err) {
              Sentry.captureException(err);
              console.log(err);
            }
            resolve(res);
          });
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(`Error fetching config data: ${err.message}`);
    } finally {
      transaction.finish();
    }
  });
};

vteeDBOperations.insertTrainingProgramsAlternate = (data) => {
  const transaction = Sentry.startTransaction({
    op: "production",
    name: "insert alt training program",
  });
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection((err, conn) => {
        if (err) {
          Sentry.captureException(err);
          console.log(err);
        } else {
          conn.query(
            "INSERT INTO training_programs_alternate SET ?",
            data,
            (err, res) => {
              if (err) {
                Sentry.captureException(err);
                console.log(err);
              }
              console.log(
                "Last insert Training Programs Alternate ID:",
                res.insertId
              );
            }
          );
          conn.release();
        }
      });
    } catch (err) {
      Sentry.captureException(err);
      console.log(
        `Error doing insert training_programs_alternate: ${err.message}`
      );
    } finally {
      transaction.finish();
    }
  });
};

module.exports = vteeDBOperations;
