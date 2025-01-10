import React from 'react'

const PrintPage = () => {
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
        <h4>SAIR No. 1671/2024</h4>
        <h4 className="font-bold text-lg underline">SA No. 24/2024</h4>
      </div>
      <div>
        <h4 className="font-semibold ">BETWEEN:</h4>
        <p>Greg Chapple </p>
      </div>
      <div>
        <h4 className="font-semibold ">AND:</h4>
        <p>State bank of india</p>
      </div>
      <div>
        <h4 className="font-semibold ">Counsels for Applicant</h4>
        <ol className="list-decimal pl-5">
          <li>c Sreedhar</li>
          <li>t sreedhar</li>
          <li>___________</li>
        </ol>
      </div>
      <div>
        <h4 className="font-semibold ">Counsels for Respondent</h4>
        <ol className="list-decimal pl-5">
          <li>c Sreedhar</li>
          <li>t sreedhar</li>
          <li>___________</li>
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
      <div>Date of filing: 11.11.2011</div>
      <div>Date of Registration: 12.12.2012</div>

      <div>
        <div className="flex flex-wrap">
          Applicant present by Sri/Smt.
          <span className="underline mx-2 font-medium">RAI CHAND</span>. The
          value of SA is Rs.
          <span className="underline mx-2 font-medium">1520222</span>. The
          application fee of Rs.
          <span className="underline mx-2 font-medium">1520222
              (Rupees One lac thirty four thousand only)</span>
          is paid through Online Transaction Ref. No.
          <span className="underline mx-2 font-medium">20250101303303</span>
          Dated
          <span className="underline mx-2 font-medium">15/2/2022</span>
          drawn on
          <span className="underline mx-2 font-medium">14/2/2022 .</span>
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