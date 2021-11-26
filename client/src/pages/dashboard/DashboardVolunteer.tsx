import { MyMentees, goalsList, notificationsList, doughnutChartData, barChartData } from './DashboardDataVolunteer'
import { columnsMyMentees } from './DashboardDatatypes';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { ListGroup }from 'react-bootstrap/';
import DashboardDoughnut from '../../components/DashboardComponents/DashboardDoughnut';
import { DashboardBarChart } from '../../components/DashboardComponents/DashboardBarChart';

const tableOptions = {
    sizePerPageList: [
        {
            text: '5', value: 5
        }, 
        {
            text: '10', value: 10
        }
    ]
    
};



function DashboardVolunteer() {

    return (
        <div className="container p-2 mt-5">
            <div className="row">
                <h5 style={{fontSize: 65, color:'#FF1E89'}}>Welcome, <strong>User</strong>!</h5>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-4 mb-4">
                    <h2 style={{fontSize: 37, fontWeight: 'bold', color:'#48B030'}}>Sessions Statistics</h2>
                    <DashboardBarChart data={barChartData} />
                </div>

                <div className="col-lg-6 col-md-6 mb-4">
                    <h2 style={{fontSize: 37, fontWeight: 'bold', color:'#48B030'}}>Questionnaires</h2>
                    <DashboardDoughnut
                        data={doughnutChartData}
                        height={330}
                        width={400}
                    />
                </div>

            </div>

            <div className="row">
                <div className="col-lg-4 col-md-4 mb-4">
                    <h2 style={{fontSize: 37, fontWeight: 'bold', color:'#48B030'}}>Active Goals</h2>
                    <ListGroup data-spy="scroll">
                        {goalsList.map(goals => (
                            <ListGroup.Item key={goals.id}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{goals.mentee}, {goals.date}</div>
                                    <div className="reviewDate">Review on {goals.reviewDate}</div>
                                    {goals.notes}
                                </div>
                                
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>

                <div className="col-lg-4 col-md-4 mb-4">
                    <h2 style={{fontSize: 37, fontWeight: 'bold', color:'#48B030'}}>Active Mentees</h2>
                    <BootstrapTable
                        keyField='name'
                        data={MyMentees}
                        columns={columnsMyMentees}
                        pagination={paginationFactory(tableOptions)} />
                </div>

                <div className="col-lg-4 col-md-4 mb-4">
                    <h2 style={{fontSize: 37, fontWeight: 'bold', color:'#48B030'}}>Latest Notifications</h2>
                    <ListGroup data-spy="scroll">
                            {notificationsList.map(notifs => (
                                <ListGroup.Item key={notifs.title}>
                                    <text style={{fontSize: 17, fontWeight: 'bold'}}>{notifs.title}</text><br/>
                                    <text style={{fontSize: 14}}> {notifs.date}, {notifs.time}</text><br/>
                                    <text style={{fontSize: 14}}>{notifs.message}</text>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                </div>

            </div>
        </div>
                




        
    )
}

export default DashboardVolunteer;