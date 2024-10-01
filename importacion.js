const vehicleData = {
        carro: {
            kia: {
                Rio: ['2018', '2019', '2020'],
                Cerato: ['2017', '2018', '2019'],
                Forte: ['2019', '2020', '2021']
            },
            hyundai: {
                Elantra: ['2016', '2017', '2018'],
                Accent: ['2017', '2018', '2019'],
                Sonata: ['2018', '2019', '2020']
            },
            ssangYong: {
                Tivoli: ['2016', '2017', '2018'],
                Korando: ['2019', '2020', '2021']
            }
        },
        camion: {
            kia: {
                BongoIII: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
            },
            hyundai: {
                PorterII: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
            },
            ssangYong: {
                RextonSports: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
            }
        },
        suv: {
            kia: {
                Carnival: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                Sportage: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                Sorento: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
            },
            hyundai: {
                Tucson: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                SantaFe: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                Starex: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
            },
            ssangYong: {
                Rexton: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                Actyon: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
            }
        }
};

function updateBrandOptions() {
    const tipo = document.getElementById('tipo').value;
    const marca = document.getElementById('marca');
    marca.innerHTML = '';

    const marcasDisponibles = Object.keys(vehicleData[tipo]);

    marcasDisponibles.forEach(marcaName => {
        const opt = document.createElement('option');
        opt.value = marcaName;
        opt.innerHTML = capitalizeFirstLetter(marcaName);
        marca.appendChild(opt);
    });

    updateModelOptions();
}

function updateModelOptions() {
    const tipo = document.getElementById('tipo').value;
    const marca = document.getElementById('marca').value;
    const linea = document.getElementById('linea');
    linea.innerHTML = '';

    const lineasDisponibles = Object.keys(vehicleData[tipo][marca]);

    lineasDisponibles.forEach(lineaName => {
        const opt = document.createElement('option');
        opt.value = lineaName;
        opt.innerHTML = lineaName;
        linea.appendChild(opt);
    });

    updateYearOptions();
}

function updateYearOptions() {
    const tipo = document.getElementById('tipo').value;
    const marca = document.getElementById('marca').value;
    const linea = document.getElementById('linea').value;
    const anio = document.getElementById('anio');
    anio.innerHTML = '';

    const aniosDisponibles = vehicleData[tipo][marca][linea];

    aniosDisponibles.forEach(anioValue => {
        const opt = document.createElement('option');
        opt.value = anioValue;
        opt.innerHTML = anioValue;
        anio.appendChild(opt);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener('DOMContentLoaded', updateBrandOptions);