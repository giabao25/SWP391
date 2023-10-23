import React, { useState, useEffect } from 'react';
import './arrange-schedule.css';
import moment from 'moment-timezone';

export function getWeekDates(year, weekNumber) {
  moment.tz.setDefault('Asia/Ho_Chi_Minh');

  const startDate = new Date(year, 0, 1 + (weekNumber - 1) * 7);
  const endDate = new Date(startDate);

  // Đảm bảo tuần bắt đầu vào ngày thứ Hai
  while (startDate.getDay() !== 1) {
    startDate.setDate(startDate.getDate() + 1);
  }

  // Đảm bảo tuần kết thúc vào ngày Chủ Nhật
  endDate.setDate(startDate.getDate() + 6);

  return { startDate, endDate };
}

function ArrangeSchedule() {
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

  const [schedule, setSchedule] = useState(
    Array.from({ length: 7 }, () => ({ day: '', slots: [false, false, false, false] }))
  );

  // Thêm trạng thái để theo dõi trạng thái các slot đã chọn
  const [selectedSlots, setSelectedSlots] = useState(
    Array.from({ length: 7 }, () => ({ day: '', slots: [false, false, false, false] })
    ));

  const toggleSlot = (dayIndex, slotIndex) => {
    const updatedSlots = [...selectedSlots];
    updatedSlots[dayIndex].slots[slotIndex] = !updatedSlots[dayIndex].slots[slotIndex];
    setSelectedSlots(updatedSlots);
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleWeekChange = (e) => {
    const newWeek = parseInt(e.target.value);
    setSelectedWeek(newWeek);

    // Làm rỗng trạng thái của các slot đã chọn khi thay đổi tuần
    setSelectedSlots(
      Array.from({ length: 7 }, () => ({ day: '', slots: [false, false, false, false] })
      ));
  };

  // Thêm hàm xử lý sự kiện "Lưu"
  const handleSave = () => {
    // Lưu trạng thái của selectedSlots vào trạng thái của tuần hiện tại
    const updatedSchedule = [...schedule];
    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      for (let slotIndex = 0; slotIndex < 4; slotIndex++) {
        updatedSchedule[dayIndex].slots[slotIndex] = selectedSlots[dayIndex].slots[slotIndex];
      }
    }
    setSchedule(updatedSchedule);
  };

  const formattedCurrentDate = moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY');


  return (
    <div className="schedule">
      <h1>XẾP LỊCH DẠY</h1>
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
            const weekDates = getWeekDates(selectedYear, week); // Đã định nghĩa ở trên
            const formattedStartDate = (weekDates.startDate.getDate() < 10 ? '0' : '') + weekDates.startDate.getDate() + '/' + (weekDates.startDate.getMonth() + 1 < 10 ? '0' : '') + (weekDates.startDate.getMonth() + 1);
            const formattedEndDate = (weekDates.endDate.getDate() < 10 ? '0' : '') + weekDates.endDate.getDate() + '/' + (weekDates.endDate.getMonth() + 1 < 10 ? '0' : '') + (weekDates.endDate.getMonth() + 1);
            return (
              <option key={week} value={week}>
                {`${formattedStartDate} - ${formattedEndDate}`}
              </option>
            );
          })}
        </select>
      </div>

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
          {selectedSlots[0].slots.map((_, slotIndex) => (
            <tr key={slotIndex}>
              <td>Slot {slotIndex + 1}</td>
              {selectedSlots.map((day, dayIndex) => (
                <td
                  key={dayIndex}
                  className={`slot ${day.slots[slotIndex] ? 'selected' : ''}`}
                  onClick={() => toggleSlot(dayIndex, slotIndex)}
                >
                  {/* Hiển thị nội dung slot ở đây */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className='arrange-btn' onClick={handleSave}>Lưu</button>
    </div>
  );
}

export default ArrangeSchedule;