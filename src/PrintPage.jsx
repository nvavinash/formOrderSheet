import React from 'react'

const PrintPage = ({formData}) => {
const formatDate = (inputDate) =>{
    const [day, month, year] = inputDate.split("-")
    return `${day}-${month}-${year}`
    
  }
 
  return (
    
    <section className=" top-56 font-palanquin w-[210mm] h-[297mm] border-red-100">
    <div className="flex flex-col gap-5 p-7">
      <div className="text-center">
        {" "}
        <h1 className="text-xl font-bold">
          ORDER SHEET FOR SECURITISATION APPLICATION <br />
          IN THE DEBTS RECOVERY TRIBUNAL-1, HYDERABAD
        </h1>{" "}
      </div>
      <div className="flex flex-col justify-center text-right -mr-4 ">
        <h4>SAIR No. {formData.sairNo}</h4>
        <h4 className="font-bold text-lg underline">SA No. {formData.saNo}</h4>
      </div>
      <div>
        <h4 className="font-semibold ">BETWEEN:</h4>
        <p>{formData.applicant}</p>
      </div>
      <div>
        <h4 className="font-semibold ">AND:</h4>
        <p>{formData.respondent}</p>
      </div>
      <div>
        <h4 className="font-semibold ">Counsels for Applicant</h4>
        <ol className="list-decimal pl-5">
          {formData.aCounsels.map((value)=>(
            <li key={value}>{value}</li>
          ))}

        </ol>
      </div>
      <div>
        <h4 className="font-semibold ">Counsels for Respondent</h4>
        <ol className="list-decimal pl-5">
        {formData.rCounsels.map((value)=>(
            <li key={value}>{value}</li>
          ))}
        </ol>
      </div>

      <div>
        <p className="flex justify-end -mr-4 ">
          REGISTER, ISSUE SS TO DEFENDANTS <br />
          THROUGH R.P. PERMITTED TO MAKE <br />
          PERSONAL SERVICE BY WAY OF FAX <br />
          COURIER/SPEED POST.
        </p>
      </div>
      <div>
        {" "}
        <h4 className="flex justify-center mt-4">
          {" "}
          Placed before Hon'ble P.O call on:
        </h4>
      </div>

      <div>
        <h3 className="font-semibold flex justify-end mt-10">REGISTRAR</h3>
      </div>
      <div>Date of filing: {formatDate(formData.filingDate)}</div>
      <div>Date of Registration: {formData.registrationDate}</div>

      <div>
        <div className="flex flex-wrap">
          Applicant present by Sri/Smt.
          <span className="underline mx-2 font-medium">{formData.presentBy}</span>. The
          value of SA is Rs.
          <span className="underline mx-2 font-medium">{formData.amount}</span>. The
          application fee of Rs.
          <span className="underline mx-2 font-medium">{formData.applicationFee}
               (Rupees One lac thirty four thousand only)</span>
          is paid through Online Transaction Ref. No.
          <span className="underline mx-2 font-medium">{formData.transactionRef}</span>
          Dated
          <span className="underline mx-2 font-medium">{formData.filingDate}</span>
          drawn on
          <span className="underline mx-2 font-medium">{formData.filingDate} .</span>
          <span>
            Application is in time. Necessary paper book copies, postal
            envelopes are furnished. Scrutiny report enclosed.
          </span>
        </div>
        <div className="mx-10">Hence placed for orders</div>

        <div>
          <h3 className="font-semibold flex justify-end mt-10">REGISTRAR</h3>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PrintPage