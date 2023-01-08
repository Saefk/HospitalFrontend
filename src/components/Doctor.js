import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Doctor= () => {
    const [doctor, setDoctor] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let myDoctor = {
            id:1,
            firstName:"Dan",
            lastName:"Li",
            DOB:"05-05-1990",
            department:"Orthopaedics",
            rank:"Medical Officer",
            directReportID:31
        }
        setDoctor(myDoctor)
    },[id])
    return (
        <div className="text-center">
            <h2>This is the Doctors profile page.</h2>
            <hr/>
            <h2>{doctor.firstName} {doctor.lastName}</h2>
            <hr/>
            <p>Date of Birth : {doctor.DOB}</p>
            <p>Department : {doctor.department}</p>
            <p>Rank : {doctor.rank}</p>

        </div>
    )
}

export default Doctor