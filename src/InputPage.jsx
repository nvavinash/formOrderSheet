import React, { useState } from "react";

const InputPage = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    sairNo: "",
    saNo: "",
    applicant: "",
    respondent:"",
    amount:"",
    transactionRef:"",
    filingDate:"",
    registrationDate:"",
    presentBy:"",
    callOn:"",
    applicationFee:"",
    applicationFeeWords:"",
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
  const addACounsel = () => {
    setFormData((prevState) => ({
      ...prevState,
      aCounsels: [...prevState.aCounsels, ""],
    }));
  };
  const addRCounsel = () =>{
    setFormData((prevState) =>({
      ...prevState,
      rCounsels: [...prevState.rCounsels,""]
    }));
  }
  const removeRCounsel = (index) => {
    const updatedCounsels = [...formData.rCounsels];
    updatedCounsels.splice(index,1);
    setFormData((prevState) => ({
      ...prevState,
      rCounsels: updatedCounsels,
    }));
  }
  const removeACounsel = (index) => {
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
                            onClick={() => removeACounsel(index)}
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
                  onClick={addACounsel}
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
                        {formData.rCounsels.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeRCounsel(index)}
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
                  onClick={addRCounsel}
                  className="bg-purple-950 text-white rounded-md px-4 py-2 hover:bg-slate-800 ">
                    Add +
                  </button>
                </div>
                {/*Adding Call on */}
                <div className="grid grid-cols-2 items-center text-center">
                <div className="text-center">
                  <label htmlFor="call on">Call on date</label>
                </div>
                <div>
                  <input
                    type="date"
                    name="callOn"
                    value={formData.callOn}
                    onChange={handleChange}
                    className="border-2 px-3 rounded-md p-2 m-2"
                  />
                </div>
              </div>
              {/* Suit Amount */}
              <div className="grid grid-cols-2 items-center text-center">
                <div>
                <label htmlFor="amount"> Suit Amount </label>
                </div>
              <div>
              <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="border-2 px-3 rounded-md p-2 m-2"
                />
              </div>
               
              </div>
              <div className="grid grid-cols-2 items-center text-center">
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
              {/* Filling Date */}
              <div className="grid grid-cols-2 items-center text-center">
                <div>
                <label htmlFor="filingDate">Filing Date</label>
                </div>
                <div>
                    
                <input
                  type="date"
                  name="filingDate"
                  value={formData.filingDate}
                  onChange={handleChange}
                  className="border-2 px-3 rounded-md p-2 m-2"
                />
                </div>

              </div>
              {/* Registration Date */}
              <div className="grid grid-cols-2 items-center text-center">
               <div>
               <label htmlFor="registrationDate">Registration Date</label>
               </div>
               
               <div>
                <input
                  type="date"
                  name="registrationDate"
                  value={formData.registrationDate}
                  onChange={handleChange}
                  className="border-2 px-3 rounded-md p-2 m-2"
                />
                </div>
                
              
              </div>
              <div className="grid grid-cols-2 items-center text-center">
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
              <div className="grid grid-cols-2 items-center text-center">
                <div>
                  <label htmlFor="applicationFee">Application Fee</label>
                </div>
                <div>
                  <input
                    type="number"
                    name="applicationFee"
                    value={formData.applicationFee}
                    onChange={handleChange}
                    className="border-2 px-3 rounded-md p-2 m-2"
                  />
                </div>
              </div>
                {/*Application Fee Words*/}
                <div className="grid grid-cols-2 items-center text-center">
                  <div>
                  <label htmlFor="applicationFeeWords">Application Fee in Words</label>
                  </div>
                  <div>
                    <input type="text" 
                    name="applicationFeeWords"
                    value={formData.applicationFeeWords}
                    onChange={handleChange}
                    className="border-2 px-3 rounded-md p-2 m-2"/>
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
