
// Docs: https://opendata.smhi.se/apidocs/metfcst/index.html

export async function fetchSMHIWeather(lat, lon) {
    const url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch SMHI weather data');
    return await response.json();
}

let a = 1

// Parse SMHI weather data for dashboard
export function parseSmhiForDashboard(data) {
  if (!data || !data.timeSeries || !data.timeSeries.length) {
    return {
      temperature: '-',
      humidity: '-',
      windSpeed: '-',
      windDirection: '-',
      cloudiness: '-',
      pressure: '-'
    };
  }

  const currentData = data.timeSeries[0];
  const getParameter = (code) => {
    const param = currentData.parameters.find(p => p.name === code);
    return param ? param.values[0] : '-';
  };

  return {
    temperature: getParameter('t'),
    humidity: getParameter('r'),
    windSpeed: getParameter('ws'),
    windDirection: getParameter('wd'),
    cloudiness: getParameter('tcc'),
    pressure: getParameter('msl')
  };
}

