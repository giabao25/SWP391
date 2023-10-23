import React, { useState, useEffect } from 'react';
import TeacherSchedule from '../../teacherpage/teacher-schedule/teacher-schedule';

function BookSchedule() {
    const years = [2023, 2024];
    const [currentDate, setCurrentDate] = useState(new Date());

    const calculateWeek = (date) => {
        const startDate = new Date(date.getFullYear(), 0, 1);
        const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
        const week = Math.ceil((days + 1) / 7);
        return week;
    };

    const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
    const [selectedWeek, setSelectedWeek] = useState(calculateWeek(currentDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const weeksInYear = Array.from({ length: 52 }, (_, i) => i + 1);

    // TODO: Add code for API calls to get teacher's schedule and handle slot booking

    const handleBookSlot = (dayIndex, slotIndex) => {
        // TODO: Add code to handle slot booking, e.g., sending a request to the server
    };

    // Function to get the start and end dates of the selected week
    const getWeekDates = (year, weekNumber) => {
        const startDate = new Date(year, 0, 1 + (weekNumber - 1) * 7);
        const endDate = new Date(startDate);
        while (startDate.getDay() !== 1) {
            startDate.setDate(startDate.getDate() + 1);
        }
        endDate.setDate(startDate.getDate() + 6);
        const pad = (num) => String(num).padStart(2, '0'); // Hàm để thêm số 0
        return {
            startDate: `${pad(startDate.getDate())}/${pad(startDate.getMonth() + 1)}`,
            endDate: `${pad(endDate.getDate())}/${pad(endDate.getMonth() + 1)}`
        };
    };

    const weekDates = getWeekDates(selectedYear, selectedWeek);

    return (
        <div>
            <h1>Đặt Lịch Học</h1>
            <div className="choose-week">
                <label>Năm:</label>
                <select value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <label>Tuần:</label>
                <select value={selectedWeek} onChange={(e) => setSelectedWeek(parseInt(e.target.value))}>
                    {weeksInYear.map((week) => {
                        const weekDates = getWeekDates(selectedYear, week);
                        return (
                            <option key={week} value={week}>
                                {weekDates.startDate} Đến {weekDates.endDate}
                            </option>
                        );
                    })}
                </select>
            </div>

            {/* Display teacher's schedule here, you need to fetch and populate this section based on API response */}
            <div>
                {TeacherSchedule ? (
                    // Add code to display teacher's schedule based on teacherSchedule data
                    <p>Lịch dạy của giáo viên</p>
                ) : (
                    <p>Chưa có lịch dạy của giáo viên...</p>
                )}
            </div>

            {/* Slot booking section, you need to implement this part as well */}
            <div>
                <p>Chọn một ngày và slot để đặt lịch học:</p>
                {/* Add code to display and handle slot booking */}
            </div>
        </div>
    );
}

export default BookSchedule;
