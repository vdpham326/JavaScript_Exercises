const getSleepHours = (day) => {
    switch (day) {
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 9
        break;
      case "wednesday":
        return 6
        break;
      case "thursday":
        return 4
        break;
      case "friday":
        return 5
        break;
      case "saturday":
        return 10
        break;
      case "sunday":
        return 7
        break;
    }
  };
  
  
  const getAcutalSleepHours = () => {
     getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
    
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  
  
  
  
  
  