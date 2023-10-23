import React, { useState, useEffect } from 'react';
import { getWeekDates } from '../arrange-schedule/arrange-schedule';
// import '../arrange-schedule/arrange-schedule.css'
function TeacherSchedule() {
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
    const daysOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];

    // Thêm trạng thái để lưu dữ liệu lịch từ API
    const [teacherSchedule, setTeacherSchedule] = useState(null);

    useEffect(() => {
        // Gọi API để lấy dữ liệu lịch từ server
        // Sử dụng Axios hoặc Fetch API như đã mô tả trong câu trả lời trước đó
    }, []); // Gọi API khi trang được tải

    const handleYearChange = (e) => {
        setSelectedYear(parseInt(e.target.value));
    };

    const handleWeekChange = (e) => {
        const newWeek = parseInt(e.target.value);
        setSelectedWeek(newWeek);
    };

    return (
        <div className="schedule">
            <h1>LỊCH DẠY CỦA GIÁO VIÊN</h1>
            <div className='choose-year'>
                <label>Năm:</label>
                <select value={selectedYear} onChange={handleYearChange}>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
            <div className='choose-week'>
                <label>Tuần:</label>
                <select value={selectedWeek} onChange={handleWeekChange}>
                    {weeksInYear.map((week) => {
                        const weekDates = getWeekDates(selectedYear, week); // Đã định nghĩa ở trang Arrange Schedule
                        const formattedStartDate = (weekDates.startDate.getDate() < 10 ? '0' : '') + weekDates.startDate.getDate() + '/' + (weekDates.startDate.getMonth() + 1 < 10 ? '0' : '') + (weekDates.startDate.getMonth() + 1);
                        const formattedEndDate = (weekDates.endDate.getDate() < 10 ? '0' : '') + weekDates.endDate.getDate() + '/' + (weekDates.endDate.getMonth() + 1 < 10 ? '0' : '') + (weekDates.endDate.getMonth() + 1);
                        return (
                            <option key={week} value={week}>
                                {`${formattedStartDate}  Đến  ${formattedEndDate}`}
                            </option>
                        );
                    })}
                </select>
            </div>

            {teacherSchedule ? (
                <div>
                    {/* <p>Năm: {teacherSchedule.selectedYear}</p>
                    <p>Tuần: {teacherSchedule.selectedWeek}</p> */}
                    <table className='arrange'>
                        <thead>
                            <tr>
                                <th></th>
                                {daysOfWeek.map((day, dayIndex) => (
                                    <th key={dayIndex}>{day}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {teacherSchedule.schedule.map((day, dayIndex) => (
                                <tr key={dayIndex}>
                                    <td>{day.day}</td>
                                    {day.slots.map((slot, slotIndex) => (
                                        <td key={slotIndex} className={`slot ${slot ? 'selected' : ''}`}>
                                            {/* Hiển thị nội dung slot ở đây */}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <table className='arrange'>
                    <thead>
                        <tr>
                            <th></th>
                            {daysOfWeek.map((day, dayIndex) => (
                                <th key={dayIndex}>{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 4 }, (_, slotIndex) => (
                            <tr key={slotIndex}>
                                <td>Slot {slotIndex + 1}</td>
                                {Array.from({ length: 7 }, (_, dayIndex) => (
                                    <td key={dayIndex} className="slot">
                                        {/* Slot trống */}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default TeacherSchedule;
