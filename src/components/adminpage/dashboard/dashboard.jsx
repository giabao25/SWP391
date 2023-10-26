import React, { useEffect, useRef } from 'react';
import './dashboard.css';
import { FaUserFriends } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import Chart from 'chart.js/auto';

function Dashboard() {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            // Hủy biểu đồ nếu đã tồn tại
            chartRef.current.destroy();
        }

        // Lấy tham chiếu đến canvas để vẽ biểu đồ
        const ctx = document.getElementById('myChart').getContext('2d');

        // Dữ liệu mẫu cho biểu đồ với 12 tháng
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Monthly Sales',
                    data: [65, 59, 80, 81, 56, 55, 70, 85, 72, 90, 78, 88], // Thêm giá trị cho 12 tháng
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
            ],
        };

        // Tạo biểu đồ mới và lưu tham chiếu vào biến chartRef.current
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: data,
        });
    }, []);

    return (
        <div>
            <div className="dashboard">
                <div className="card card1">
                    <FaMoneyBillWave className="icon1" />
                    <h2>214K</h2>
                    <p>Weekly Sales</p>
                </div>
                <div className="card card2">
                    <FaUserFriends className="icon2" />
                    <h2>70</h2>
                    <p>New Users</p>
                </div>
                <div className="card card3">
                    <FaCoins className="icon3" />
                    <h2>900K</h2>
                    <p>Total Profit</p>
                </div>
            </div>
            <div className="chart-container">
                <canvas id="myChart" width="700" height="200"></canvas>
            </div>
        </div>
    );
}

export default Dashboard;
