import React, { useState } from "react";

const InputPage = () => {
  const [formData, setFormData] = useState({
    sairNo: "",
    aCounsels: [""],
    rCounsels: [""],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCounselChange = (index, value) => {
    const updatedCounsels = [...formData.aCounsels];
    updatedCounsels[index] = value;
    setFormData((prevState) => ({
      ...prevState,
      aCounsels: updatedCounsels,
    }));
  };
  const handleRCounselChange = (index, value) =>{
    const updatedRCounsels = [...formData.rCounsels];
    updatedRCounsels[index] = value;
    setFormData((prevState) =>({
      ...prevState,
      rCounsels: updatedRCounsels,}
    ));

  }
  const addCounsel = () => {
    setFormData((prevState) => ({
      ...prevState,
      aCounsels: [...prevState.aCounsels, ""],
    }));
  };
  const removeCounsel = (index) => {
    const updatedCounsels = [...formData.aCounsels];
    updatedCounsels.splice(index, 1);
    setFormData((prevState) => ({
      ...prevState,
      aCounsels: updatedCounsels,
    }));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-purple-100 p-8 flex flex-col w-[200mm] ">
          <h1 className="flex justify-center bg-purple-950 rounded text-white font-poppins font-black text-2xl py-3">
            Form
          </h1>{" "}
          <form noValidate onSubmit={handleSubmit}>
            <div className="mt-10 flex flex-col gap-x-4 gap-y-2">
              <div className="grid grid-cols-2 items-center text-center">
                <div>
                  <label htmlFor="sairNo">Sair No.</label>
                </div>
                <div>
                  <input
                    type="text"
                    value={formData.sairNo}
                    onChange={handleChange}
                    name="sairNo"
                    className="border-2 px-3 rounded-md p-2 m-2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 items-center text-center">
                <div>
                  <label htmlFor="saNo">Sa. No.</label>
                </div>

                <div>
                  <input
                    type="text"
                    value={formData.saNo}
                    onChange={handleChange}
                    name="saNo"
                    className="border-2 px-3 rounded-md p-2 m-2 bg-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 items-center text-center">
                <div>
                  <label htmlFor="applicant">Applicant</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="applicant"
                    value={formData.applicant}
                    onChange={handleChange}
                    className="border-2 px-3 rounded-md p-2 m-2 "
                  />
                </div>
              </div>
              {/* Counsels for Applicant */}
              <div className="grid grid-cols-2 text-center items-center">
                <div>
                  <label htmlFor="saNo">Counsels for Applicant</label>
                </div>
                <div>
                  <ol>
                    {formData.aCounsels.map((aCounsel, index) => (
                      <li key={index}>
                        <input
                          type="text"
                          value={aCounsel}
                          name="aCounsel"
                          onChange={(e) =>
                            handleCounselChange(index, e.target.value)
                          }
                          className="border-2 px-3 rounded-md p-2 m-2"
                        />
                        {formData.aCounsels.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeCounsel(index)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md"
                          >
                            X
                          </button>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={addCounsel}
                  className="bg-purple-950 text-white rounded-md px-4 py-2 hover:bg-slate-800 "
                >
                  {" "}
                  Add +
                </button>
              </div>

              {/* Respondent */}
              <div className="grid grid-cols-2 items-center text-center">
                <div className="text-center">
                  <label htmlFor="respondent">Respondent</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="respondent"
                    value={formData.respondent}
                    onChange={handleChange}
                    className="border-2 px-3 rounded-md p-2 m-2"
                  />
                </div>
              </div>
              {/* Counsels for Respondent */}
              <div className="grid grid-cols-2 text-center items-center">
                <div>
                  <label htmlFor="saNo">Counsels for Respondent</label>
                </div>
                <div>
                  <ol>
                    {formData.rCounsels.map((rCounsel, index) => (
                      <li key={index}>
                        <input
                          type="text"
                          className="border-2 px-3 rounded-md p-2 m-2"
                          name="rCounsel"
                          value={rCounsel}
                          onChange={(e)=>handleRCounselChange(index,e.target.value)}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              {/* Suit Amount */}
              <div className="grid grid-cols-2 items-center text-center">
                <label htmlFor="amount">Suit Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="border-2 px-3 rounded-md p-2 m-2"
                />
              </div>
              <div className="flex justify-around text-center items-center">
                <div>
                  <label htmlFor="transactionRef">Transaction Ref No.</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="transactionRef"
                    value={formData.transactionRef}
                    onChange={handleChange}
                    className="border-2 px-3 rounded-md p-2 m-2"
                  />
                </div>
              </div>
              <div className="flex justify-around text-center items-center">
                <label htmlFor="filingDate">Filing Date</label>
                <input
                  type="date"
                  name="filingDate"
                  value={formData.filingDate}
                  onChange={handleChange}
                  className="border-2 px-3 rounded-md p-2 m-2"
                />
              </div>
              {/* Registration Date */}
              <div className="flex justify-around text-center items-center">
                <label htmlFor="registrationDate">Registration Date</label>
                <input
                  type="date"
                  name="registrationDate"
                  value={formData.registrationDate}
                  onChange={handleChange}
                  className="border-2 px-3 rounded-md p-2 m-2"
                />
              </div>
              <div className="flex justify-around text-center items-center">
                <div>
                  <label htmlFor="presentBy">Presented By</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="presentBy"
                    value={formData.presentBy}
                    onChange={handleChange}
                    className="border-2 px-3 rounded-md p-2 m-2"
                  />
                </div>
              </div>
              {/*Application Fee*/}
              <div className="flex justify-around text-center items-center">
                <div>
                  <label htmlFor="presentBy">Application Fee</label>
                </div>
                <div>
                  <input
                    type="number"
                    name="appicationFee"
                    value={formData.applicationFee}
                    onChange={handleChange}
                    className="border-2 px-3 rounded-md p-2 m-2"
                  />
                </div>
              </div>
              {/* Submit Button*/}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-purple-950 text-white px-5 py-3 rounded-md hover:bg-slate-800 "
                >
                  {" "}
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputPage;
