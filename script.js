const data = {
    identity: {
        title: "Core Identity",
        previewTitle: "Earth Observation, Geodesy & GIS",
        html: `
            <ul>
                <li><strong>MS</strong> — Manikandan Somu</li>
                <li><strong>Focus</strong> — Satellite data, geodesy, GIS and climate services</li>
                <li><strong>Base</strong> — Bonn, Germany</li>
            </ul>
        `
    },

    experience: {
        title: "Experience",
        previewTitle: "3+ Years Professional Experience",
        html: `
            <p>
                <strong>Working Student – Full Stack Geospatial Developer</strong><br>
                Navilan Solution GmbH<br>
                Bonn, Germany · Jun 2024 – Jul 2025
            </p>

            <div style="height:12px;"></div>

            <p>
                <strong>Student Researcher – Geospatial Deep Learning</strong><br>
                PhenoRob Lab, University of Bonn<br>
                Bonn, Germany · Jan 2023 – Dec 2023
            </p>

            <div style="height:12px;"></div>

            <p>
                <strong>Senior GIS Analyst</strong><br>
                Trimble Inc.<br>
                Chennai, India · Jul 2019 – Oct 2022
            </p>
        `
    },

    education: {
        title: "Education",
        previewTitle: "Geodesy & Geoinformatics Background",
        html: `
            <p>
                <strong>M.Sc. Geodetic Engineering</strong><br>
                University of Bonn<br>
                Bonn, Germany · Oct 2022 – Jun 2026
            </p>

            <div style="height:12px;"></div>

            <p>
                <strong>Bachelor's in Geoinformatics Engineering</strong><br>
                College of Engineering Guindy, Anna University<br>
                Chennai, India · Aug 2015 – Jun 2019
            </p>
        `
    },

    projects: {
        title: "Projects",
        previewTitle: "Remote Sensing, Hydrology & GIS Projects",
        html: `
            <ul>
                <li><strong>Baltic Sea Mass Variability</strong> · GRACE/GRACE-FO, ERA5, GLDAS, altimetry and GRDC</li>
                <li><strong>Ahr Valley Flood Dashboard</strong> · Sentinel-1, ERA5 precipitation and GRACE TWS</li>
                <li><strong>Geospatial Web Applications</strong> · WebGIS, APIs and spatial databases</li>
                <li><strong>Routing & Mapping Tools</strong> · OpenStreetMap, QGIS and Python workflows</li>
            </ul>

            <div class="chips">
                <span>GRACE</span>
                <span>Sentinel-1/2</span>
                <span>ERA5</span>
                <span>GLDAS</span>
                <span>QGIS</span>
                <span>Python</span>
                <span>MATLAB</span>
                <span>PostGIS</span>
            </div>
        `
    },

journey: {
    title: "Journey",

    previewTitle: "From Geoinformatics to Earth Observation",

    html: `

    <div class="journey-orbit-list">

        <div class="journey-step">
            <span>🪐</span>
            <div>
                <p>Bachelor</p>
                <small>Geoinformatics Engineering · Anna University</small>
            </div>
        </div>

        <div class="journey-step">
            <span>🛰️</span>
            <div>
                <p>Trimble</p>
                <small>Senior GIS Analyst · GIS data processing & QA/QC</small>
            </div>
        </div>

        <div class="journey-step">
            <span>🌍</span>
            <div>
                <p>Master</p>
                <small>Geodetic Engineering · University of Bonn</small>
            </div>
        </div>

        <div class="journey-step">
            <span>🧠</span>
            <div>
                <p>PhenoRob</p>
                <small>Geospatial deep learning · Satellite & UAV data</small>
            </div>
        </div>

        <div class="journey-step">
            <span>🗺️</span>
            <div>
                <p>Navilan</p>
                <small>Full Stack Geospatial Developer · WebGIS & spatial databases</small>
            </div>
        </div>

        <div class="journey-step future">
            <span>⭐</span>
            <div>
                <p>Future</p>
                <small>Earth Observation / Geospatial Engineer</small>
            </div>
        </div>

    </div>

    `
},

 skillData: {
    title: "GRACE(-FO)",

    previewTitle: "Satellite Gravimetry & Water Storage Monitoring",

    html: `
    <p>
    Experience working with GRACE and GRACE-FO satellite gravimetry missions
    to investigate large-scale water mass variations and climate-related
    environmental changes.
    </p>

    <div class="chips">

        <span>GRACE / GRACE-FO</span>

        <span>
        Equivalent Water Height (EWH)
        <small>
        Convert gravity variations into water storage changes.
        </small>
        </span>

        <span>
        Terrestrial Water Storage (TWS)
        <small>
        Total water stored in soil, groundwater, snow and surface water.
        </small>
        </span>

        <span>
        Gaussian Filtering
        <small>
        Spatial smoothing to reduce high-frequency noise.
        </small>
        </span>

        <span>
        Leakage Correction
        <small>
        Reduce signal mixing between land and ocean regions.
        </small>
        </span>

        <span>
        Time Series Analysis
        <small>
        Trend, anomaly and seasonal variation analysis.
        </small>
        </span>

        <span>
        Ocean Mass Change
        <small>
        Investigated Baltic Sea mass variability and Major Baltic Inflow events.
        </small>
        </span>

    </div>
    `
},

skillSentinel: {
    title: "Remote Sensing",

    previewTitle: "Earth Observation & Environmental Monitoring",

    html: `

    <p>
    Experience in processing and analysing satellite imagery for flood
    monitoring, vegetation assessment, land use and land cover mapping,
    and environmental change detection.
    </p>

    <div class="chips">

        <span>
        Sentinel-1 SAR
        <small>
        Flood extent mapping and change detection during the 2021 Ahr Valley flood.
        </small>
        </span>

        <span>
        Sentinel-2 MSI
        <small>
        Vegetation monitoring and land cover analysis in the Ahr Valley using optical imagery.
        </small>
        </span>

        <span>
        Landsat
        <small>
        Land Use / Land Cover (LULC) classification and forest change analysis,
        including forest gain and forest loss monitoring.
        </small>
        </span>

        <span>
        ESA SNAP
        <small>
        SAR preprocessing including orbit correction, radiometric calibration,
        speckle filtering and terrain correction.
        </small>
        </span>

        <span>Flood Mapping</span>

        <span>Vegetation Monitoring</span>

        <span>Land Use / Land Cover</span>

        <span>Forest Gain & Loss</span>

        <span>Environmental Monitoring</span>

    </div>

    `
},

skillGNSS: {

    title: "GNSS & Geodesy",

    previewTitle: "Positioning, Reference Frames & Coordinate Systems",

    html: `

    <p>
    Experience in geodesy and satellite positioning, including coordinate
    reference systems, terrestrial and global reference frames,
    and high-precision positioning techniques.
    </p>

    <div class="chips">

        <span>
        GNSS
        <small>
        Satellite-based positioning and navigation systems.
        </small>
        </span>

        <span>
        GPS
        <small>
        Global Positioning System for positioning and navigation.
        </small>
        </span>

        <span>
        Galileo
        <small>
        European global navigation satellite system.
        </small>
        </span>

        <span>
        Reference Frames
        <small>
        Terrestrial and global geodetic reference systems.
        </small>
        </span>

        <span>
        Coordinate Systems
        <small>
        Geographic and projected coordinate systems.
        </small>
        </span>

        <span>
        ITRF
        <small>
        International Terrestrial Reference Frame.
        </small>
        </span>

        <span>Geodesy</span>

        <span>Positioning</span>

    </div>

    `
},

    skillPlatform: {
        title: "Python",
        previewTitle: "Scientific & Geospatial Development",
        html: `
            <div class="chips">
                <span>PyQt</span>
                <span>matplotlib</span>
                <span>FastAPI</span>
                <span>Streamlit</span>
                <span>NumPy</span>
                <span>Pandas</span>
            </div>
        `
    },

    skillBackend: {
        title: "GIS",
        previewTitle: "Spatial Analysis & WebGIS",
        html: `
            <div class="chips">
                <span>QGIS</span>
                <span>ArcGIS</span>
                <span>PyQGIS</span>
                <span>GDAL</span>
                <span>PostGIS</span>
                <span>OpenStreetMap</span>
            </div>
        `
    },

    skillBigData: {
        title: "Climate",
        previewTitle: "Climate & Environmental Data",
        html: `
            <div class="chips">
                <span>ERA5</span>
                <span>GLDAS</span>
                <span>GRDC</span>
                <span>Altimetry</span>
                <span>Hydrology</span>
                <span>Environmental Monitoring</span>
            </div>
        `
    },

    toolQGIS: {
        title: "QGIS",
        previewTitle: "Desktop GIS, PyQGIS & Spatial Workflows",
        html: `
            <p>Used for spatial analysis, raster/vector processing, map layouts, plugins, and quality checking.</p>
            <div class="chips">
                <span>QGIS</span><span>PyQGIS</span><span>Raster/Vector</span><span>Map Layouts</span><span>QA/QC</span>
            </div>
        `
    },

    toolArcGIS: {
        title: "ArcGIS",
        previewTitle: "GIS Analysis & Professional Mapping",
        html: `
            <p>Used for geospatial analysis, data management, cartography, and environmental mapping workflows.</p>
            <div class="chips">
                <span>ArcGIS</span><span>Spatial Analysis</span><span>Geodatabases</span><span>Mapping</span><span>Data Management</span>
            </div>
        `
    },

    toolSNAP: {
        title: "ESA SNAP",
        previewTitle: "Sentinel Processing & SAR Workflows",
        html: `
            <p>Used for Sentinel-1 and Sentinel-2 preprocessing, calibration, terrain correction, and flood mapping workflows.</p>
            <div class="chips">
                <span>Sentinel-1 SAR</span><span>Sentinel-2</span><span>Calibration</span><span>Speckle Filter</span><span>Terrain Correction</span>
            </div>
        `
    },

    toolMATLAB: {
        title: "MATLAB",
        previewTitle: "Scientific Analysis & GRACE Processing",
        html: `
            <p>Used for GRACE/GRACE-FO time series processing, lag correlation, anomaly analysis, and scientific visualization.</p>
            <div class="chips">
                <span>GRACE</span><span>Time Series</span><span>Lag Correlation</span><span>Anomalies</span><span>Visualization</span>
            </div>
        `
    }
};

const previewCard = document.getElementById("previewCard");
let hideTimer;

function setPreview(key) {
    const item = data[key];
    if (!item) return;

    clearTimeout(hideTimer);
    previewCard.classList.remove("hidden");

    previewCard.innerHTML = `
        <p class="preview-label">${item.title.toUpperCase()}</p>
        <h3>${item.previewTitle}</h3>
        ${item.html}
    `;
}

function hidePreview() {
    hideTimer = setTimeout(() => {
        previewCard.classList.add("hidden");
    }, 120);
}

document.querySelectorAll("[data-section]").forEach(el => {
    const key = el.dataset.section;

    el.addEventListener("mouseenter", () => setPreview(key));
    el.addEventListener("focus", () => setPreview(key));

    el.addEventListener("mouseleave", hidePreview);
    el.addEventListener("blur", hidePreview);
});

previewCard.addEventListener("mouseenter", () => {
    clearTimeout(hideTimer);
});

previewCard.addEventListener("mouseleave", hidePreview);

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stars = Array.from({ length: 140 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.3,
        s: Math.random() * 0.25 + 0.05
    }));
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
        star.y += star.s;

        if (star.y > canvas.height) {
            star.y = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.78)";
        ctx.fill();
    }

    requestAnimationFrame(drawStars);
}

resizeCanvas();
drawStars();

window.addEventListener("resize", resizeCanvas);
