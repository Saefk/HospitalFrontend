import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        let doctorList = [
            {
                id:1,
                firstName:"Dan",
                lastName:"Li",
                DOB:"05-05-1990",
                department:"Orthopaedics",
                rank:"Medical Officer",
                directReportID:31
            },
            {
                id:31,
                firstName:"Jim",
                lastName:"Li",
                DOB:"05-05-1970",
                department:"Orthopaedics",
                rank:"Consultant",
                directReportID:31
            },
            {
                id:2,
                firstName:"Don",
                lastName:"Li",
                DOB:"05-05-1980",
                department:"Orthopaedics",
                rank:"Specialist",
                directReportID:31
            },
            {
                id:3,
                firstName:"Chun",
                lastName:"Li",
                DOB:"05-05-1997",
                department:"Orthopaedics",
                rank:"House Officer",
                directReportID:31
            },
        ];
        setDoctors(doctorList)
    },[]);


    return (
        <div className="text-center">
            <h2>This is the Doctors page. Search for doctors here</h2>
            <hr/>
            <table className="table table-striped table-hover">
                <thead>
                    <th>Doctor</th>
                    <th>Department</th>
                    <th>Rank</th>
                </thead>
                <tbody>
                    {doctors.map((m) =>(
                        <tr key={m.id}>
                            <td>
                                <Link to={`/doctors/${m.id}`}>
                                    {m.firstName} {m.lastName}
                                </Link>
                            </td>
                            <td>
                                {m.department}
                            </td>
                            <td>
                                {m.rank}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Doctors