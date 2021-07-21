import { v4 as uuidv4 } from "uuid";
import faker from 'faker';

const NumberOfJobTypes = 4;
const MaximumNumberOfCompaniesPerJob = 10;

function generateJob() {
  const jobId = uuidv4();
  const jobType = Math.floor(Math.random() * NumberOfJobTypes);

  const noOfCompanies = Math.ceil(Math.random() * MaximumNumberOfCompaniesPerJob);
  const companiesArray = new Array(noOfCompanies).fill().map(() => uuidv4());

  const initialDate = faker.date.past(10);
  const finalDate = faker.date.between(initialDate, new Date())

  const newJob = {
    jobId,
    jobType,
    cnpjsList: companiesArray,
    initialDate,
    finalDate,
  };

  return newJob;
}

export default generateJob;