/**
 * Data store and default initial state for DC Piscícola
 * 10 Estanques de tierra + 3 Geomembranas
 */

const APP_CONFIG = {
  name: "DC Piscícola",
  recaptchaV3SiteKey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", // Clave de sitio Google reCAPTCHA v3 (Invisible)
  version: "v1.0",
  get fullName() {
    return `${this.name} ${this.version}`;
  }
};
const APP_NAME = APP_CONFIG.name;
const APP_VERSION = APP_CONFIG.version;
const APP_FULL_NAME = APP_CONFIG.fullName;

if (typeof window !== 'undefined') {
  window.APP_CONFIG = APP_CONFIG;
  window.APP_NAME = APP_NAME;
  window.APP_VERSION = APP_VERSION;
  window.APP_FULL_NAME = APP_FULL_NAME;
}

const STORAGE_KEY = (typeof window !== 'undefined' && window.IS_STAGING_ENV)
  ? 'PISCICOLA_STAGING_DATA_V1'
  : 'PISCICOLA_PRO_DATA_V1';

// Seed Initial Data
const DEFAULT_DATA = {
  _schemaVersion: 450,
  lastSavedAt: new Date().toISOString(),
  farmInfo: {
    name: "Piscícola Asopasito",
    nit: "901.890.123-5",
    location: "El Paso, Cesar, Colombia",
    technicalManager: "Ing. Carlos Mendoza (DC Asesorías)",
    currency: "COP ($)",
    lastUpdate: new Date().toISOString()
  },

  users: [
    {
      id: 1,
      email: "dcasesorias@gmail.com",
      password: "123456",
      name: "Administrador Master (DC Asesorías)",
      role: "master",
      companyId: "EMP-004"
    },
    {
      id: 2,
      email: "asopasito@gmail.com",
      password: "123456",
      name: "Asopasito (Cliente Lite)",
      role: "lite",
      companyId: "EMP-004"
    },
    {
      id: 3,
      email: "asopasito@gmail.com",
      password: "123456",
      name: "Asopasito (Administrador Master)",
      role: "master",
      companyId: "EMP-004"
    },
    {
      id: 4,
      email: "cliente@dcpiscicola.com",
      password: "123456",
      name: "Piscícola Asopasito (Cliente Lite)",
      role: "lite",
      companyId: "EMP-004"
    }
  ],

  companies: [
    {
      id: "EMP-004",
      name: "Piscícola Asopasito",
      nit: "901.890.123-5",
      clientName: "Asopasito",
      clientEmail: "asopasito@gmail.com",
      phone: "+57 310 000 0000",
      location: "El Paso, Cesar, Colombia",
      technicalManager: "Ing. Carlos Mendoza (DC Asesorías)",
      earthenPondsCount: 10,
      geomembranesCount: 3,
      status: "activo",
      createdAt: "2026-03-01",
      userRole: "both",
      assignedUsers: [
        { id: "USR-EMP-004-MASTER", email: "dcasesorias@gmail.com", name: "Administrador Master", role: "master", password: "123456", companyId: "EMP-004" },
        { id: "USR-EMP-004-LITE", email: "asopasito@gmail.com", name: "Asopasito (Cliente)", role: "lite", password: "123456", companyId: "EMP-004" },
        { id: "USR-EMP-004-PRESET", email: "cliente@dcpiscicola.com", name: "Cliente Lite", role: "lite", password: "123456", companyId: "EMP-004" }
      ],
      notes: "Empresa piscícola El Pasito / Asopasito administrada en DC Piscícola Pro.",
      contract: {
        planName: "Asesoría Técnica Zootécnica",
        billingCycle: "mensual",
        feeAmount: 2000000,
        startDate: "2026-03-01",
        billingDay: 5,
        nextBillingDate: "2026-11-05",
        status: "al_dia",
        notes: "Plan mensual activo"
      },
      billingPayments: []
    }
  ],

  activeCompanyId: "EMP-004",

  units: [
    { id: "E-01", type: "estanque", name: "Estanque 0", areaM2: 1170, avgDepthM: 1.2, volumeM3: 1404, soilType: "Arcilloso", aeration: "Cascada natural", activeBatchId: null, status: "descanso" },
    { id: "E-02", type: "estanque", name: "Estanque 1", areaM2: 900, avgDepthM: 1.5, volumeM3: 1350, soilType: "Arcilloso", aeration: "Paletas 2 HP", activeBatchId: null, status: "descanso" },
    { id: "E-03", type: "estanque", name: "Estanque 2", areaM2: 800, avgDepthM: 1.3, volumeM3: 1040, soilType: "Arcilloso", aeration: "Cascada natural", activeBatchId: null, status: "descanso" },
    { id: "E-04", type: "estanque", name: "Estanque 3", areaM2: 1200, avgDepthM: 1.6, volumeM3: 1920, soilType: "Arcilloso", aeration: "Splash 2 HP", activeBatchId: null, status: "descanso" },
    { id: "E-05", type: "estanque", name: "Estanque 4", areaM2: 1100, avgDepthM: 1.5, volumeM3: 1650, soilType: "Arcilloso", aeration: "Splash 2 HP", activeBatchId: null, status: "descanso" },
    { id: "E-06", type: "estanque", name: "Estanque 5", areaM2: 750, avgDepthM: 1.4, volumeM3: 1050, soilType: "Arcilloso", aeration: "Paletas 1 HP", activeBatchId: null, status: "descanso" },
    { id: "E-07", type: "estanque", name: "Estanque 6", areaM2: 950, avgDepthM: 1.4, volumeM3: 1330, soilType: "Arcilloso", aeration: "Splash 1.5 HP", activeBatchId: null, status: "descanso" },
    { id: "E-08", type: "estanque", name: "Estanque 7", areaM2: 1000, avgDepthM: 1.5, volumeM3: 1500, soilType: "Arcilloso", aeration: "Paletas 2 HP", activeBatchId: null, status: "descanso" },
    { id: "E-09", type: "estanque", name: "Estanque 8", areaM2: 1300, avgDepthM: 1.6, volumeM3: 2080, soilType: "Arcilloso", aeration: "Splash 2 HP", activeBatchId: null, status: "descanso" },
    { id: "E-10", type: "estanque", name: "Estanque 9", areaM2: 1400, avgDepthM: 1.5, volumeM3: 2100, soilType: "Arcilloso", aeration: "Paletas 2 HP", activeBatchId: null, status: "descanso" },

    { id: "G-01", type: "geomembrana", name: "Geomembrana 1", diameterM: 12, avgDepthM: 1.3, volumeM3: 147, liner: "HDPE 1.0mm", aeration: "Blower 3 HP + Manguera Difusora Micro-porosa", activeBatchId: "LOTE-2026-G1", status: "activo" },
    { id: "G-02", type: "geomembrana", name: "Geomembrana 2", diameterM: 12, avgDepthM: 1.3, volumeM3: 147, liner: "HDPE 1.0mm", aeration: "Blower 3 HP + Difusores Disco Aero-Tube", activeBatchId: "LOTE-2026-G2", status: "activo" },
    { id: "G-03", type: "geomembrana", name: "Geomembrana 3", diameterM: 14, avgDepthM: 1.4, volumeM3: 215, liner: "HDPE 1.2mm", aeration: "Blower 4 HP + Air Injection Biofloc", activeBatchId: null, status: "descanso" }
  ],

  batches: [
    {
      id: "LOTE-2026-G1",
      unitId: "G-01",
      species: "Tilapia Roja (Oreochromis sp.)",
      stockingDate: "2026-07-10",
      initialQuantity: 9500,
      currentQuantity: 9350,
      initialWeightGrams: 2.5,
      currentWeightGrams: 248,
      currentAvgWeightGrams: 248,
      targetWeightGrams: 450,
      targetHarvestWeightGrams: 450,
      densityFishM2: 64.6,
      densityFishM3: 63.6,
      currentBiomassKg: 2318.8,
      accumulatedMortality: 150,
      totalMortality: 150,
      mortalityRatePct: 1.58,
      status: "activo",
      origin: "Criadero Certificado",
      notes: "Lote en Geomembrana 01 con excelente desarrollo."
    },
    {
      id: "LOTE-2026-G2",
      unitId: "G-02",
      species: "Tilapia Roja (Oreochromis sp.)",
      stockingDate: "2026-08-05",
      initialQuantity: 10000,
      currentQuantity: 9800,
      initialWeightGrams: 2.5,
      currentWeightGrams: 291,
      currentAvgWeightGrams: 291,
      targetWeightGrams: 450,
      targetHarvestWeightGrams: 450,
      densityFishM2: 68.0,
      densityFishM3: 66.7,
      currentBiomassKg: 2851.8,
      accumulatedMortality: 200,
      totalMortality: 200,
      mortalityRatePct: 2.0,
      status: "activo",
      origin: "ANDRES CUBILLOS HERRERA",
      notes: "Lote en Geomembrana 02 con alto crecimiento."
    }
  ],

  feedings: [],

  biometries: [
    {
      id: "BIO-9026",
      batchId: "LOTE-2026-G1",
      date: "2026-10-05",
      unitId: "G-01",
      sampleSize: 29,
      averageWeightGrams: 248,
      averageLengthCm: 22,
      dailyWeightGainGrams: 3.2,
      feedConversionRatio: 1.32,
      estimatedBiomassKg: 2318.8,
      waterTempC: 28.5,
      dissolvedOxygenMgL: 5.8,
      ph: 7.4,
      responsibleTechnician: "Ing. Carlos Mendoza (DC Asesorías)",
      notes: "Tilapia roja - buen estado sanitario y apetito activo."
    },
    {
      id: "BIO-6354",
      batchId: "LOTE-2026-G2",
      date: "2026-10-05",
      unitId: "G-02",
      sampleSize: 29,
      averageWeightGrams: 291,
      averageLengthCm: 24,
      dailyWeightGainGrams: 3.2,
      feedConversionRatio: 1.32,
      estimatedBiomassKg: 2851.8,
      waterTempC: 28.6,
      dissolvedOxygenMgL: 6.0,
      ph: 7.5,
      responsibleTechnician: "Ing. Carlos Mendoza (DC Asesorías)",
      notes: "Crecimiento óptimo, sin presencia de patologías."
    }
  ],

  densityRecords: [],
  medications: [],

  purchases: [
    {
      id: "PUR-01",
      date: "2026-09-10",
      supplier: "AGROFUTURO EL PASO",
      supplierId: "SUPP-01",
      invoice: "Factura S/N",
      description: "Mojarra # 25",
      category: "Alimento Concentrado",
      quantity: 120,
      unit: "kg",
      unitPrice: 2850,
      totalAmount: 342000,
      paymentStatus: "pagado",
      items: [{ description: "Mojarra # 25", category: "Alimento Concentrado", quantity: 120, unit: "kg", unitPrice: 2850, totalAmount: 342000 }]
    },
    {
      id: "PUR-02",
      date: "2026-09-10",
      supplier: "AGROFUTURO EL PASO",
      supplierId: "SUPP-01",
      invoice: "Factura 0",
      description: "Mojarra # 30",
      category: "Alimento Concentrado",
      quantity: 40,
      unit: "kg",
      unitPrice: 2900,
      totalAmount: 116000,
      paymentStatus: "pagado",
      items: [{ description: "Mojarra # 30", category: "Alimento Concentrado", quantity: 40, unit: "kg", unitPrice: 2900, totalAmount: 116000 }]
    },
    {
      id: "PUR-03",
      date: "2026-09-15",
      supplier: "AGROCAM",
      supplierId: "SUPP-06",
      invoice: "FAC-1024",
      description: "Italcol Alevinos 45%",
      category: "Alimento Concentrado",
      quantity: 480,
      unit: "kg",
      unitPrice: 5600,
      totalAmount: 2688000,
      paymentStatus: "pagado",
      items: [{ description: "Italcol Alevinos 45%", category: "Alimento Concentrado", quantity: 480, unit: "kg", unitPrice: 5600, totalAmount: 2688000 }]
    },
    {
      id: "PUR-04",
      date: "2026-09-18",
      supplier: "PROVEEDOR GENERAL",
      supplierId: "SUPP-04",
      invoice: "FAC-1088",
      description: "Sal Marina en Grano no yodada",
      category: "Medicamentos y Químicos",
      quantity: 640,
      unit: "kg",
      unitPrice: 950,
      totalAmount: 609000,
      paymentStatus: "pagado",
      items: [{ description: "Sal Marina en Grano no yodada", category: "Medicamentos y Químicos", quantity: 640, unit: "kg", unitPrice: 950, totalAmount: 609000 }]
    }
  ],

  inventory: [
    { id: "INV-01", name: "Mojarra # 25", category: "Alimento Concentrado", presentation: "Bulto 40 Kls", location: "Bodega", costPerKg: 2850, costPerUnit: 114000, minStockKg: 40, currentStockKg: 40, unit: "kg", proteinPct: 32, supplierId: "SUPP-01", supplier: "AGROFUTURO EL PASO", brand: "Concentrado", status: "bajo" },
    { id: "INV-02", name: "Mojarra # 30", category: "Alimento Concentrado", presentation: "Bulto x 40 Kls", location: "Bodega", costPerKg: 2900, costPerUnit: 116000, minStockKg: 40, currentStockKg: 40, unit: "kg", proteinPct: 32, supplierId: "SUPP-01", supplier: "AGROFUTURO EL PASO", brand: "Concentrado", status: "optimo" },
    { id: "INV-03", name: "Alevinos Mojarra Nilotica", category: "Alevinos y Genética", presentation: "und", location: "Bodega Principal", costPerKg: 90, costPerUnit: 90, minStockKg: 10000, currentStockKg: 0, unit: "und", supplierId: "SUPP-02", supplier: "ANDRES CUBILLOS HERRERA", brand: "Italcol", status: "agotado" },
    { id: "INV-04", name: "Alevinos Mojarra Roja", category: "Alevinos y Genética", presentation: "und", location: "Bodega Principal", costPerKg: 90, costPerUnit: 90, minStockKg: 10000, currentStockKg: 0, unit: "und", supplierId: "SUPP-02", supplier: "ANDRES CUBILLOS HERRERA", brand: "Italcol", status: "agotado" },
    { id: "INV-05", name: "Italcol Alevinos 45%", category: "Alimento Concentrado", presentation: "Bulto 25 kg", location: "Bodega Climatizada - Estiba C1", costPerKg: 5600, costPerUnit: 140000, minStockKg: 150, currentStockKg: 480, unit: "kg", proteinPct: 45, supplierId: "SUPP-06", supplier: "AGROCAM", brand: "Italcol", status: "optimo" },
    { id: "INV-06", name: "Italcol Engorde 30%", category: "Alimento Concentrado", presentation: "Bulto 40 kg", location: "Bodega Principal - Estiba A3", costPerKg: 3950, costPerUnit: 158000, minStockKg: 500, currentStockKg: 1800, unit: "kg", proteinPct: 30, supplierId: "SUPP-06", supplier: "AGROCAM", brand: "Italcol", status: "optimo" },
    { id: "INV-07", name: "Solla Tilapia 32%", category: "Alimento Concentrado", presentation: "Bulto 40 kg", location: "Bodega Principal - Estiba B2", costPerKg: 4100, costPerUnit: 164000, minStockKg: 500, currentStockKg: 2100, unit: "kg", proteinPct: 32, supplierId: "SUPP-01", supplier: "AGROFUTURO EL PASO", brand: "Solla", status: "optimo" },
    { id: "INV-08", name: "Italcol Mojarra 38%", category: "Alimento Concentrado", presentation: "Bulto 40 kg", location: "Bodega Principal - Estiba A4", costPerKg: 4600, costPerUnit: 184000, minStockKg: 300, currentStockKg: 850, unit: "kg", proteinPct: 38, supplierId: "SUPP-06", supplier: "AGROCAM", brand: "Italcol", status: "optimo" },
    { id: "INV-09", name: "Sal Marina en Grano no yodada", category: "Medicamentos y Químicos", presentation: "Bulto 50 kg", location: "Bodega de Químicos - Estiba Q1", costPerKg: 950, costPerUnit: 47500, minStockKg: 400, currentStockKg: 2220, unit: "kg", supplierId: "SUPP-04", supplier: "PROVEEDOR GENERAL", brand: "Cloruro de Sodio (NaCl)", status: "optimo" }
  ],

  inventoryMovements: [
    { id: "MOV-01", date: "2026-09-10", type: "entrada", itemId: "INV-02", itemName: "Mojarra # 30", category: "Alimento Concentrado", quantity: 40, unit: "kg", totalCost: 116000, referenceDoc: "Factura 0", destination: "Bodega Principal", balanceAfter: 40, notes: "Recepción de compra a Agrofuturo El Paso: 40 kg" },
    { id: "MOV-02", date: "2026-09-10", type: "entrada", itemId: "INV-01", itemName: "Mojarra # 25", category: "Alimento Concentrado", quantity: 120, unit: "kg", totalCost: 342000, referenceDoc: "Factura 0", destination: "Bodega Principal", balanceAfter: 160, notes: "Recepción de compra a Agrofuturo El Paso: 120 kg" },
    { id: "MOV-03", date: "2026-09-10", type: "entrada", itemId: "INV-01", itemName: "Mojarra # 25", category: "Alimento Concentrado", quantity: 120, unit: "kg", totalCost: 342000, referenceDoc: "Compra Factura S/N", destination: "Bodega Principal", balanceAfter: 120, notes: "Proveedor: Agrofuturo El Paso - Mojarra # 25" }
  ],

  expenses: [
    { id: "GAS-8609", date: "2026-09-22", category: "Transporte y Fletes", recipient: "ANDRES CUBILLOS", description: "TRANSPORTE ALEVINOS", paymentMethod: "Efectivo", amount: 150000, receiptNumber: "GAS-8609", notes: "Flete de alevinos para geomembrana." },
    { id: "GAS-3762", date: "2026-09-21", category: "Transporte y Fletes", recipient: "EDS La 15", description: "TANQUEO GASOLINA", paymentMethod: "Transferencia Bancaria", amount: 138057, receiptNumber: "GAS-3762", notes: "Combustible operación de granja." }
  ],

  employees: [],
  payrollPayments: [],
  transfers: [],
  harvests: [],
  sales: [],

  suppliers: [
    { id: "SUPP-01", name: "AGROFUTURO EL PASO", nit: "0", category: "Alimento Concentrado", contact: "0", phone: "0", email: "0@0", city: "Colombia", address: "0", paymentTerms: "Contado", status: "activo", notes: "Distribuidor local de concentrado" },
    { id: "SUPP-02", name: "ANDRES CUBILLOS HERRERA", nit: "0", category: "Alevinos y Genética", contact: "0", phone: "0", email: "0@0", city: "Colombia", address: "0", paymentTerms: "Contado", status: "activo", notes: "Suministro de alevinos y genética" },
    { id: "SUPP-03", name: "AGROPECUARIA EL CAMPO", nit: "0", category: "Alimento Concentrado", contact: "0", phone: "0", email: "0@0", city: "Colombia", address: "0", paymentTerms: "Contado", status: "activo", notes: "Distribuidor insumos agropecuarios" },
    { id: "SUPP-04", name: "PROVEEDOR GENERAL", nit: "0", category: "Alimento Concentrado", contact: "0", phone: "0", email: "0@0", city: "Colombia", address: "0", paymentTerms: "Contado", status: "activo", notes: "Proveedor general de sal y suministros" },
    { id: "SUPP-05", name: "AGROMATERIALES PORCIPOLLOS", nit: "0", category: "Alimento Concentrado", contact: "0", phone: "0", email: "0@0", city: "Colombia", address: "0", paymentTerms: "Contado", status: "activo", notes: "Materiales e insumos agropecuarios" },
    { id: "SUPP-06", name: "AGROCAM", nit: "901083522", category: "Alimento Concentrado", contact: "AGROCAM", phone: "3182320679", email: "0@0", city: "LA LOMA CESAR", address: "La Loma Cesar", paymentTerms: "Contado", status: "activo", notes: "Distribuidor mayorista de alimentos Italcol" }
  ],

  clients: [
    { id: "CLI-01", name: "Distribuidora Pescados El Paso", type: "Mayorista", contact: "Gerencia", phone: "3150000010", email: "ventas@elpaso.com", city: "El Paso, Cesar", preferredSpecies: "Tilapia Roja Entera", paymentTerms: "Contado", notes: "Cliente principal de cosecha comercial" }
  ],

  equipment: [],
  maintenanceLogs: [],
  waterQuality: [],

  categoriesCatalog: [
    { id: "cat-alimento", name: "Alimento Concentrado", icon: "🌾", module: "alimento" },
    { id: "cat-medicamento", name: "Medicamentos y Químicos", icon: "💊", module: "medicamento" },
    { id: "cat-alevinos", name: "Alevinos y Genética", icon: "🐟", module: "alevinos" },
    { id: "cat-equipos", name: "Equipos y Aireación", icon: "⚙️", module: "equipos" },
    { id: "cat-transporte", name: "Transporte y Fletes", icon: "🚚", module: "gasto" },
    { id: "cat-servicios", name: "Servicios Públicos y Energía", icon: "⚡", module: "gasto" },
    { id: "cat-nomina", name: "Nómina y Operarios", icon: "👥", module: "gasto" },
    { id: "cat-varios", name: "Insumos Varios", icon: "📦", module: "otro" }
  ],

  speciesCatalog: [
    { id: "sp-tilapia-roja", name: "Tilapia Roja", scientificName: "Oreochromis sp.", code: "TR", status: "activo" },
    { id: "sp-tilapia-nilotica", name: "Tilapia Nilótica", scientificName: "Oreochromis niloticus", code: "TN", status: "activo" },
    { id: "sp-cachama", name: "Cachama Blanca", scientificName: "Piaractus brachypomus", code: "CB", status: "activo" },
    { id: "sp-trucha", name: "Trucha Arcoíris", scientificName: "Oncorhynchus mykiss", code: "TA", status: "activo" },
    { id: "sp-bocachico", name: "Bocachico", scientificName: "Prochilodus magdalenae", code: "BM", status: "activo" }
  ],

  aspirationSystemsCatalog: [
    { id: "asp-paletas", name: "Paletas / Ruedas de Paletas 1.5 - 2 HP", icon: "⚙️", power: "1.5 - 2 HP" },
    { id: "asp-splash", name: "Aireadores Splash 1 - 2 HP", icon: "💦", power: "1 - 2 HP" },
    { id: "asp-blower", name: "Blower Regenerativo + Manguera Difusora", icon: "🌀", power: "2 - 4 HP" }
  ],

  brandsCatalog: [
    { id: "br-italcol", name: "Italcol", category: "alimento" },
    { id: "br-solla", name: "Solla", category: "alimento" },
    { id: "br-purina", name: "Purina", category: "alimento" },
    { id: "br-aliansa", name: "Aliansa", category: "alimento" },
    { id: "br-biomar", name: "BioMar", category: "alimento" },
    { id: "br-cargill", name: "Cargill", category: "alimento" },
    { id: "br-aquavita", name: "Aquavita", category: "alimento" }
  ],

  companyStores: {
    'EMP-004': {
      "farmInfo": {
        "name": "Piscícola Asopasito",
        "nit": "901.890.123-5",
        "location": "Colombia",
        "technicalManager": "Dager",
        "currency": "COP ($)",
        "lastUpdate": "2026-11-23T17:31:03.841Z"
      },
      "units": [
        {
          "id": "E-01",
          "type": "estanque",
          "name": "Estanque 0",
          "areaM2": 750,
          "avgDepthM": 1.2,
          "volumeM3": 900,
          "soilType": "Arcilloso",
          "aeration": "Blower Regenerativo + Mangueras Aero-Tube",
          "activeBatchId": null,
          "status": "descanso"
        },
        {
          "id": "E-02",
          "type": "estanque",
          "name": "Estanque 1",
          "areaM2": 800,
          "avgDepthM": 1.5,
          "volumeM3": 1200,
          "soilType": "Arcilloso",
          "aeration": "",
          "activeBatchId": null,
          "status": "descanso"
        },
        {
          "id": "E-03",
          "type": "estanque",
          "name": "Estanque 2",
          "areaM2": 800,
          "avgDepthM": 1.4,
          "volumeM3": 1120,
          "soilType": "Arcilloso",
          "aeration": "",
          "activeBatchId": null,
          "status": "descanso"
        },
        {
          "id": "E-04",
          "type": "estanque",
          "name": "Estanque 3",
          "areaM2": 800,
          "avgDepthM": 1.4,
          "volumeM3": 1120,
          "soilType": "Arcilloso",
          "aeration": "",
          "activeBatchId": null,
          "status": "descanso"
        },
        {
          "id": "E-05",
          "type": "estanque",
          "name": "Estanque 4",
          "areaM2": 800,
          "avgDepthM": 1.4,
          "volumeM3": 1120,
          "soilType": "Arcilloso",
          "aeration": "",
          "activeBatchId": null,
          "status": "descanso"
        },
        {
          "id": "E-06",
          "type": "estanque",
          "name": "Estanque 5",
          "areaM2": 800,
          "avgDepthM": 1.4,
          "volumeM3": 1120,
          "soilType": "Arcilloso",
          "aeration": "",
          "activeBatchId": null,
          "status": "descanso"
        },
        {
          "id": "E-07",
          "type": "estanque",
          "name": "Estanque 6",
          "areaM2": 800,
          "avgDepthM": 1.4,
          "volumeM3": 1120,
          "soilType": "Arcilloso",
          "aeration": "",
          "activeBatchId": null,
          "status": "descanso"
        },
        {
          "id": "E-08",
          "type": "estanque",
          "name": "Estanque 7",
          "areaM2": 800,
          "avgDepthM": 1.4,
          "volumeM3": 1120,
          "soilType": "Arcilloso",
          "aeration": "",
          "activeBatchId": "LOTE-09-22-N",
          "status": "activo"
        },
        {
          "id": "E-09",
          "type": "estanque",
          "name": "Estanque 8",
          "areaM2": 800,
          "avgDepthM": 1.5,
          "volumeM3": 1200,
          "soilType": "Arcilloso",
          "aeration": "",
          "activeBatchId": null,
          "status": "descanso"
        },
        {
          "id": "E-10",
          "type": "estanque",
          "name": "Estanque 9",
          "areaM2": 800,
          "avgDepthM": 1.4,
          "volumeM3": 1120,
          "soilType": "Arcilloso",
          "aeration": "",
          "activeBatchId": null,
          "status": "descanso"
        },
        {
          "id": "G-01",
          "type": "geomembrana",
          "name": "Geomembrana 1",
          "diameterM": 0,
          "areaM2": 0,
          "avgDepthM": 0,
          "volumeM3": 0,
          "liner": "HDPE 1.0mm",
          "aeration": "Blower + Difusores",
          "activeBatchId": "LOTE-05-24-R",
          "status": "activo"
        },
        {
          "id": "G-02",
          "type": "geomembrana",
          "name": "Geomembrana 2",
          "diameterM": 0,
          "areaM2": 0,
          "avgDepthM": 0,
          "volumeM3": 0,
          "liner": "HDPE 1.0mm",
          "aeration": "Blower + Difusores",
          "activeBatchId": "LOTE-06-11-N",
          "status": "activo"
        },
        {
          "id": "G-03",
          "type": "geomembrana",
          "name": "Geomembrana 3",
          "diameterM": 0,
          "areaM2": 0,
          "avgDepthM": 0,
          "volumeM3": 0,
          "liner": "HDPE 1.0mm",
          "aeration": "Blower + Difusores",
          "activeBatchId": "LOTE-09-22-R",
          "status": "activo"
        }
      ],
      "batches": [
        {
          "id": "LOTE-09-22-N",
          "rootBatchId": "LOTE-09-22-N",
          "transferSequence": 0,
          "unitId": "E-08",
          "species": "Mojarra / Tilapia Nilótica (Oreochromis niloticus)",
          "stockingDate": "2026-09-22",
          "initialQuantity": 5000,
          "currentQuantity": 5000,
          "initialWeightGrams": 1,
          "currentAvgWeightGrams": 86,
          "totalMortality": 0,
          "origin": "",
          "targetHarvestWeightGrams": 450,
          "status": "activo",
          "notes": ""
        },
        {
          "id": "LOTE-09-22-R",
          "rootBatchId": "LOTE-09-22-R",
          "transferSequence": 0,
          "unitId": "G-03",
          "species": "Mojarra / Tilapia Roja (Oreochromis sp.)",
          "stockingDate": "2026-09-22",
          "initialQuantity": 10000,
          "currentQuantity": 9849,
          "initialWeightGrams": 1,
          "currentAvgWeightGrams": 40.3,
          "totalMortality": 151,
          "origin": "",
          "targetHarvestWeightGrams": 450,
          "status": "activo",
          "notes": ""
        },
        {
          "id": "LOTE-05-24-R",
          "rootBatchId": "LOTE-05-24-R",
          "transferSequence": 0,
          "unitId": "G-01",
          "species": "Mojarra / Tilapia Roja (Oreochromis sp.)",
          "stockingDate": "2026-05-24",
          "initialQuantity": 10000,
          "currentQuantity": 10000,
          "initialWeightGrams": 0.5,
          "currentAvgWeightGrams": 258,
          "totalMortality": 0,
          "origin": "FINCA EL DIAMANTE",
          "targetHarvestWeightGrams": 300,
          "status": "activo",
          "notes": ""
        },
        {
          "id": "LOTE-06-11-N",
          "rootBatchId": "LOTE-06-11-N",
          "transferSequence": 0,
          "unitId": "G-02",
          "species": "Mojarra / Tilapia Nilótica (Oreochromis niloticus)",
          "stockingDate": "2026-06-11",
          "initialQuantity": 4000,
          "currentQuantity": 4000,
          "initialWeightGrams": 1,
          "currentAvgWeightGrams": 226,
          "totalMortality": 0,
          "origin": "FINCA EL DIAMANTE",
          "targetHarvestWeightGrams": 350,
          "status": "activo",
          "notes": ""
        }
      ],
      "feedings": [],
      "biometries": [
        {
          "id": "BIO-6354",
          "unitId": "G-02",
          "date": "2026-10-05",
          "sampleCount": 29,
          "avgWeightGrams": 291,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 0,
          "dailyGainGrams": 3.2,
          "fcr": 1.32,
          "recommendedFeedPct": 1.8,
          "recommendedDailyKg": 0,
          "notes": ""
        },
        {
          "id": "BIO-9026",
          "unitId": "G-01",
          "date": "2026-10-05",
          "sampleCount": 29,
          "avgWeightGrams": 248,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 0,
          "dailyGainGrams": 3.2,
          "fcr": 1.32,
          "recommendedFeedPct": 2.5,
          "recommendedDailyKg": 0,
          "notes": "Tilapia roja"
        },
        {
          "id": "BIO-6140",
          "unitId": "G-01",
          "date": "2026-06-07",
          "sampleCount": 103,
          "avgWeightGrams": 5,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 50,
          "dailyGainGrams": 2.5,
          "fcr": 1.32,
          "recommendedFeedPct": 8,
          "recommendedDailyKg": 4,
          "notes": "",
          "averageWeightGrams": 5,
          "updatedAt": "2026-11-07T13:43:46.418Z"
        },
        {
          "id": "BIO-0282",
          "unitId": "G-02",
          "date": "2026-08-03",
          "sampleCount": 21,
          "avgWeightGrams": 11.9,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 47.6,
          "dailyGainGrams": 0.78,
          "fcr": 1.32,
          "recommendedFeedPct": 5.5,
          "recommendedDailyKg": 2.6,
          "notes": ""
        },
        {
          "id": "BIO-4077",
          "unitId": "G-01",
          "date": "2026-08-03",
          "sampleCount": 28,
          "avgWeightGrams": 12.3,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 123,
          "dailyGainGrams": 0.52,
          "fcr": 1.32,
          "recommendedFeedPct": 5.5,
          "recommendedDailyKg": 6.8,
          "notes": ""
        },
        {
          "id": "BIO-9642",
          "unitId": "G-01",
          "date": "2026-08-14",
          "sampleCount": 21,
          "avgWeightGrams": 85,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 850,
          "dailyGainGrams": 5.19,
          "fcr": 1.32,
          "recommendedFeedPct": 3.2,
          "recommendedDailyKg": 27.2,
          "notes": ""
        },
        {
          "id": "BIO-9170",
          "unitId": "G-02",
          "date": "2026-08-14",
          "sampleCount": 35,
          "avgWeightGrams": 116,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 464,
          "dailyGainGrams": 7.44,
          "fcr": 1.32,
          "recommendedFeedPct": 2.5,
          "recommendedDailyKg": 11.6,
          "notes": ""
        },
        {
          "id": "BIO-1560",
          "unitId": "G-01",
          "date": "2026-09-15",
          "sampleCount": 35,
          "avgWeightGrams": 172,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 1720,
          "dailyGainGrams": 6.21,
          "fcr": 1.32,
          "recommendedFeedPct": 2.5,
          "recommendedDailyKg": 43,
          "notes": ""
        },
        {
          "id": "BIO-1331",
          "unitId": "G-02",
          "date": "2026-09-15",
          "sampleCount": 39,
          "avgWeightGrams": 226,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 904,
          "dailyGainGrams": 7.86,
          "fcr": 1.32,
          "recommendedFeedPct": 2.5,
          "recommendedDailyKg": 22.6,
          "notes": ""
        },
        {
          "id": "BIO-4486",
          "unitId": "E-08",
          "date": "2026-11-17",
          "sampleCount": 23,
          "avgWeightGrams": 86,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 430,
          "dailyGainGrams": 6.07,
          "fcr": 1.32,
          "recommendedFeedPct": 3.2,
          "recommendedDailyKg": 13.8,
          "notes": "NILOTICA",
          "averageWeightGrams": 86,
          "updatedAt": "2026-11-19T21:13:14.820Z"
        },
        {
          "id": "BIO-4050",
          "unitId": "G-03",
          "date": "2026-11-17",
          "sampleCount": 66,
          "avgWeightGrams": 40.3,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 396.9146999999999,
          "dailyGainGrams": 2.81,
          "fcr": 1.32,
          "recommendedFeedPct": 4,
          "recommendedDailyKg": 15.9,
          "notes": "TILAPIA ROJA",
          "averageWeightGrams": 40.3,
          "updatedAt": "2026-11-19T21:13:08.704Z"
        },
        {
          "id": "BIO-2999",
          "unitId": "G-01",
          "date": "2026-11-17",
          "sampleCount": 12,
          "avgWeightGrams": 258,
          "avgLengthCm": 0,
          "calculatedBiomassKg": 2580,
          "dailyGainGrams": 0.71,
          "fcr": 1.32,
          "recommendedFeedPct": 1.8,
          "recommendedDailyKg": 46.4,
          "notes": "TILAPIA ROJA"
        }
      ],
      "densityRecords": [],
      "medications": [],
      "purchases": [
        {
          "id": "PUR-042290",
          "date": "2026-09-10",
          "supplier": "AGROFUTURO EL PASO",
          "invoice": "FAC-2290",
          "category": "Alimento Concentrado",
          "description": "MOJARRA # 25 (+1 producto más)",
          "quantity": 160,
          "unit": "kg",
          "unitPrice": 2863,
          "totalAmount": 458000,
          "items": [
            {
              "itemId": "INV-ALI-5236",
              "description": "MOJARRA # 25",
              "category": "Alimento Concentrado",
              "quantity": 120,
              "unit": "kg",
              "unitPrice": 2850,
              "totalAmount": 342000
            },
            {
              "itemId": "INV-ALI-3367",
              "description": "MOJARRA # 30",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 2900,
              "totalAmount": 116000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-18T21:14:02.290Z"
        },
        {
          "id": "PUR-077126",
          "date": "2026-09-14",
          "supplier": "ANDRES CUBILLOS HERRERA",
          "invoice": "FAC-7126",
          "category": "Alevinos y Genética",
          "description": "ALEVINO MOJARRA NILOTICA (+1 producto más)",
          "quantity": 15000,
          "unit": "unidades",
          "unitPrice": 90,
          "totalAmount": 1350000,
          "items": [
            {
              "itemId": "INV-ALE-9782",
              "description": "ALEVINO MOJARRA NILOTICA",
              "category": "Alevinos y Genética",
              "quantity": 5000,
              "unit": "unidades",
              "unitPrice": 90,
              "totalAmount": 450000
            },
            {
              "itemId": "INV-ALE-4489",
              "description": "ALEVINO MOJARRA ROJA",
              "category": "Alevinos y Genética",
              "quantity": 10000,
              "unit": "unidades",
              "unitPrice": 90,
              "totalAmount": 900000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-18T21:14:37.126Z",
          "updatedAt": "2026-10-18T21:16:26.356Z"
        },
        {
          "id": "PUR-234790",
          "date": "2026-09-19",
          "supplier": "PROVEEDOR GENERAL",
          "invoice": "FAC-4790",
          "category": "Alimento Concentrado",
          "description": "MOJARRA # 25 (+1 producto más)",
          "quantity": 280,
          "unit": "kg",
          "unitPrice": 2643,
          "totalAmount": 740000,
          "items": [
            {
              "itemId": "INV-ALI-5236",
              "description": "MOJARRA # 25",
              "category": "Alimento Concentrado",
              "quantity": 200,
              "unit": "kg",
              "unitPrice": 2850,
              "totalAmount": 570000
            },
            {
              "itemId": "INV-ALI-8276",
              "description": "PREPICO 100 DORADO",
              "category": "Alimento Concentrado",
              "quantity": 80,
              "unit": "kg",
              "unitPrice": 2125,
              "totalAmount": 170000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-18T21:17:14.790Z",
          "updatedAt": "2026-10-18T21:17:39.481Z"
        },
        {
          "id": "PUR-323282",
          "date": "2026-09-21",
          "supplier": "AGROPECUARIA EL CAMPO",
          "invoice": "12338",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 45H (+2 productos más)",
          "quantity": 400,
          "unit": "kg",
          "unitPrice": 2675,
          "totalAmount": 1070000,
          "items": [
            {
              "itemId": "INV-ALI-0353",
              "description": "AQUATILAPIA 45H",
              "category": "Alimento Concentrado",
              "quantity": 80,
              "unit": "kg",
              "unitPrice": 4050,
              "totalAmount": 324000
            },
            {
              "itemId": "INV-ALI-5115",
              "description": "AQUATILAPIA 25E",
              "category": "Alimento Concentrado",
              "quantity": 200,
              "unit": "kg",
              "unitPrice": 2575,
              "totalAmount": 515000
            },
            {
              "itemId": "INV-ALI-8276",
              "description": "PREPICO 100 DORADO",
              "category": "Alimento Concentrado",
              "quantity": 120,
              "unit": "kg",
              "unitPrice": 1925,
              "totalAmount": 231000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-18T21:18:43.282Z"
        },
        {
          "id": "PUR-365159",
          "date": "2026-09-22",
          "supplier": "PROVEEDOR GENERAL",
          "invoice": "FAC-5159",
          "category": "Insumos Varios",
          "description": "SAL MARINA (+1 producto más)",
          "quantity": 140,
          "unit": "kg",
          "unitPrice": 979,
          "totalAmount": 137000,
          "items": [
            {
              "itemId": "INV-INS-0964",
              "description": "SAL MARINA",
              "category": "Insumos Varios",
              "quantity": 100,
              "unit": "kg",
              "unitPrice": 520,
              "totalAmount": 52000
            },
            {
              "itemId": "INV-ALI-8276",
              "description": "PREPICO 100 DORADO",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 2125,
              "totalAmount": 85000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-18T21:19:25.159Z"
        },
        {
          "id": "PUR-139260",
          "date": "2026-10-06",
          "supplier": "AGROMATERIALES PORCIPOLLOS",
          "invoice": "FAC-9259",
          "category": "Alimento Concentrado",
          "description": "PREPICO 100 DORADO (+1 producto más)",
          "quantity": 160,
          "unit": "kg",
          "unitPrice": 2469,
          "totalAmount": 395000,
          "items": [
            {
              "itemId": "INV-ALI-8276",
              "description": "PREPICO 100 DORADO",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 2000,
              "totalAmount": 80000
            },
            {
              "itemId": "INV-ALI-5115",
              "description": "AQUATILAPIA 25E",
              "category": "Alimento Concentrado",
              "quantity": 120,
              "unit": "kg",
              "unitPrice": 2625,
              "totalAmount": 315000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-21T15:05:39.260Z"
        },
        {
          "id": "PUR-299795",
          "date": "2026-10-08",
          "supplier": "AGROCAM",
          "invoice": "8786",
          "category": "Alimento Concentrado",
          "description": "MOJARRA # 25",
          "quantity": 120,
          "unit": "kg",
          "unitPrice": 3084,
          "totalAmount": 370080,
          "items": [
            {
              "itemId": "INV-ALI-5236",
              "description": "MOJARRA # 25",
              "category": "Alimento Concentrado",
              "quantity": 120,
              "unit": "kg",
              "unitPrice": 3084,
              "totalAmount": 370080
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-21T15:08:19.795Z"
        },
        {
          "id": "PUR-472101",
          "date": "2026-10-15",
          "supplier": "AGROCAM",
          "invoice": "FAC-2101",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 25E",
          "quantity": 80,
          "unit": "kg",
          "unitPrice": 2700,
          "totalAmount": 216000,
          "items": [
            {
              "itemId": "INV-ALI-5115",
              "description": "AQUATILAPIA 25E",
              "category": "Alimento Concentrado",
              "quantity": 80,
              "unit": "kg",
              "unitPrice": 2700,
              "totalAmount": 216000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-21T15:11:12.101Z",
          "updatedAt": "2026-10-21T15:11:42.420Z"
        },
        {
          "id": "PUR-582544",
          "date": "2026-10-16",
          "supplier": "AGROCAM",
          "invoice": "8797",
          "category": "Alimento Concentrado",
          "description": "PREPICO 100 DORADO (+1 producto más)",
          "quantity": 80,
          "unit": "kg",
          "unitPrice": 3138,
          "totalAmount": 251000,
          "items": [
            {
              "itemId": "INV-ALI-8276",
              "description": "PREPICO 100 DORADO",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 2075,
              "totalAmount": 83000
            },
            {
              "itemId": "INV-ALI-8925",
              "description": "MOJARRA # 45",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 4200,
              "totalAmount": 168000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-21T15:13:02.544Z",
          "updatedAt": "2026-10-21T15:13:51.112Z"
        },
        {
          "id": "PUR-754702",
          "date": "2026-10-20",
          "supplier": "AGROPAISA",
          "invoice": "3183601",
          "category": "Alimento Concentrado",
          "description": "MOJARRA # 45",
          "quantity": 40,
          "unit": "kg",
          "unitPrice": 4420,
          "totalAmount": 176800,
          "items": [
            {
              "itemId": "INV-ALI-8925",
              "description": "MOJARRA # 45",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 4420,
              "totalAmount": 176800
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-21T15:15:54.702Z"
        },
        {
          "id": "PUR-874261",
          "date": "2026-10-20",
          "supplier": "AGROPECUARIA EL CAMPO",
          "invoice": "13798",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 38E (+1 producto más)",
          "quantity": 280,
          "unit": "kg",
          "unitPrice": 2804,
          "totalAmount": 785000,
          "items": [
            {
              "itemId": "INV-ALI-9083",
              "description": "AQUATILAPIA 38E",
              "category": "Alimento Concentrado",
              "quantity": 160,
              "unit": "kg",
              "unitPrice": 3500,
              "totalAmount": 560000
            },
            {
              "itemId": "INV-ALI-8276",
              "description": "PREPICO 100 DORADO",
              "category": "Alimento Concentrado",
              "quantity": 120,
              "unit": "kg",
              "unitPrice": 1875,
              "totalAmount": 225000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-10-21T15:17:54.261Z"
        },
        {
          "id": "PUR-231727",
          "date": "2026-05-22",
          "supplier": "FINCA EL DIAMANTE",
          "invoice": "0",
          "category": "Alevinos y Genética",
          "description": "ALEVINO MOJARRA ROJA",
          "quantity": 10000,
          "unit": "unidades",
          "unitPrice": 90,
          "totalAmount": 900000,
          "items": [
            {
              "itemId": "INV-ALE-4489",
              "description": "ALEVINO MOJARRA ROJA",
              "category": "Alevinos y Genética",
              "quantity": 10000,
              "unit": "unidades",
              "unitPrice": 90,
              "totalAmount": 900000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T13:47:11.727Z"
        },
        {
          "id": "PUR-470928",
          "date": "2026-11-07",
          "supplier": "AGROPECUARIA EL CAMPO",
          "invoice": "0",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 45EXT (+2 productos más)",
          "quantity": 150,
          "unit": "kg",
          "unitPrice": 3687,
          "totalAmount": 553010,
          "items": [
            {
              "itemId": "INV-ALI-6963",
              "description": "AQUATILAPIA 45EXT",
              "category": "Alimento Concentrado",
              "quantity": 80,
              "unit": "kg",
              "unitPrice": 4100,
              "totalAmount": 328000
            },
            {
              "itemId": "INV-ALI-0353",
              "description": "AQUATILAPIA 45H",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 4000,
              "totalAmount": 160000
            },
            {
              "itemId": "INV-ALI-3670",
              "description": "MELAZA",
              "category": "Alimento Concentrado",
              "quantity": 30,
              "unit": "kg",
              "unitPrice": 2167,
              "totalAmount": 65010
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T13:51:10.928Z",
          "updatedAt": "2026-11-15T23:25:01.344Z"
        },
        {
          "id": "PUR-344142",
          "date": "2026-06-20",
          "supplier": "AGROPECUARIA EL CAMPO",
          "invoice": "0",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 45H (+1 producto más)",
          "quantity": 80,
          "unit": "kg",
          "unitPrice": 4050,
          "totalAmount": 324000,
          "items": [
            {
              "itemId": "INV-ALI-0353",
              "description": "AQUATILAPIA 45H",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 4000,
              "totalAmount": 160000
            },
            {
              "itemId": "INV-ALI-6963",
              "description": "AQUATILAPIA 45EXT",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 4100,
              "totalAmount": 164000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T14:05:44.142Z"
        },
        {
          "id": "PUR-643079",
          "date": "2026-06-11",
          "supplier": "TECNOAQUA SAS",
          "invoice": "0",
          "category": "Medicamentos y Químicos",
          "description": "KOXNIL",
          "quantity": 2,
          "unit": "kg",
          "unitPrice": 107000,
          "totalAmount": 214000,
          "items": [
            {
              "itemId": "INV-MED-8042",
              "description": "KOXNIL",
              "category": "Medicamentos y Químicos",
              "quantity": 2,
              "unit": "kg",
              "unitPrice": 107000,
              "totalAmount": 214000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T14:10:43.079Z"
        },
        {
          "id": "PUR-915660",
          "date": "2026-06-11",
          "supplier": "ASIA ACUICULTURA",
          "invoice": "0",
          "category": "Medicamentos y Químicos",
          "description": "MATACLORO (+1 producto más)",
          "quantity": 2,
          "unit": "unidades",
          "unitPrice": 30000,
          "totalAmount": 60000,
          "items": [
            {
              "itemId": "INV-MED-8166",
              "description": "MATACLORO",
              "category": "Medicamentos y Químicos",
              "quantity": 1,
              "unit": "unidades",
              "unitPrice": 10000,
              "totalAmount": 10000
            },
            {
              "itemId": "INV-MED-5406",
              "description": "PROBIOTICO",
              "category": "Medicamentos y Químicos",
              "quantity": 1,
              "unit": "litros",
              "unitPrice": 50000,
              "totalAmount": 50000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T14:15:15.660Z"
        },
        {
          "id": "PUR-032854",
          "date": "2026-07-04",
          "supplier": "PROVEEDOR GENERAL",
          "invoice": "0",
          "category": "Medicamentos y Químicos",
          "description": "LEVADURA",
          "quantity": 1,
          "unit": "kg",
          "unitPrice": 12700,
          "totalAmount": 12700,
          "items": [
            {
              "itemId": "INV-MED-5914",
              "description": "LEVADURA",
              "category": "Medicamentos y Químicos",
              "quantity": 1,
              "unit": "kg",
              "unitPrice": 12700,
              "totalAmount": 12700
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T14:17:12.854Z"
        },
        {
          "id": "PUR-296558",
          "date": "2026-07-15",
          "supplier": "AGROPECUARIA EL CAMPO",
          "invoice": "0",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 38E",
          "quantity": 80,
          "unit": "kg",
          "unitPrice": 3550,
          "totalAmount": 284000,
          "items": [
            {
              "itemId": "INV-ALI-9083",
              "description": "AQUATILAPIA 38E",
              "category": "Alimento Concentrado",
              "quantity": 80,
              "unit": "kg",
              "unitPrice": 3550,
              "totalAmount": 284000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T14:21:36.558Z"
        },
        {
          "id": "PUR-363831",
          "date": "2026-07-24",
          "supplier": "AGROPECUARIA EL CAMPO",
          "invoice": "0",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 38E",
          "quantity": 120,
          "unit": "kg",
          "unitPrice": 3550,
          "totalAmount": 426000,
          "items": [
            {
              "itemId": "INV-ALI-9083",
              "description": "AQUATILAPIA 38E",
              "category": "Alimento Concentrado",
              "quantity": 120,
              "unit": "kg",
              "unitPrice": 3550,
              "totalAmount": 426000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T14:22:43.831Z"
        },
        {
          "id": "PUR-509905",
          "date": "2026-07-31",
          "supplier": "AGROPECUARIA EL CAMPO",
          "invoice": "0",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 34",
          "quantity": 80,
          "unit": "kg",
          "unitPrice": 3050,
          "totalAmount": 244000,
          "items": [
            {
              "itemId": "INV-ALI-5812",
              "description": "AQUATILAPIA 34",
              "category": "Alimento Concentrado",
              "quantity": 80,
              "unit": "kg",
              "unitPrice": 3050,
              "totalAmount": 244000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T14:25:09.905Z"
        },
        {
          "id": "PUR-673344",
          "date": "2026-08-04",
          "supplier": "CAMPOVALLENATO",
          "invoice": "0",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 34 (+1 producto más)",
          "quantity": 160,
          "unit": "kg",
          "unitPrice": 2469,
          "totalAmount": 395000,
          "items": [
            {
              "itemId": "INV-ALI-5812",
              "description": "AQUATILAPIA 34",
              "category": "Alimento Concentrado",
              "quantity": 120,
              "unit": "kg",
              "unitPrice": 3000,
              "totalAmount": 360000
            },
            {
              "itemId": "INV-INS-3354",
              "description": "CAL AGRICOLA",
              "category": "Insumos Varios",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 875,
              "totalAmount": 35000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T14:27:53.344Z",
          "updatedAt": "2026-11-07T14:28:58.391Z"
        },
        {
          "id": "PUR-863144",
          "date": "2026-08-08",
          "supplier": "CAMPOVALLENATO",
          "invoice": "0",
          "category": "Insumos Varios",
          "description": "CAL AGRICOLA",
          "quantity": 120,
          "unit": "kg",
          "unitPrice": 1200,
          "totalAmount": 144000,
          "items": [
            {
              "itemId": "INV-INS-3354",
              "description": "CAL AGRICOLA",
              "category": "Insumos Varios",
              "quantity": 120,
              "unit": "kg",
              "unitPrice": 1200,
              "totalAmount": 144000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-07T14:31:03.144Z"
        },
        {
          "id": "PUR-761266",
          "date": "2026-10-29",
          "supplier": "AGROCAM",
          "invoice": "0794",
          "category": "Alimento Concentrado",
          "description": "MOJARRA # 25",
          "quantity": 120,
          "unit": "kg",
          "unitPrice": 2700,
          "totalAmount": 324000,
          "items": [
            {
              "itemId": "INV-ALI-5236",
              "description": "MOJARRA # 25",
              "category": "Alimento Concentrado",
              "quantity": 120,
              "unit": "kg",
              "unitPrice": 2700,
              "totalAmount": 324000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-15T23:19:21.266Z"
        },
        {
          "id": "PUR-028600",
          "date": "2026-11-07",
          "supplier": "AGROFUTURO EL PASO",
          "invoice": "14808",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 38E (+2 productos más)",
          "quantity": 200,
          "unit": "kg",
          "unitPrice": 2340,
          "totalAmount": 468000,
          "items": [
            {
              "itemId": "INV-ALI-9083",
              "description": "AQUATILAPIA 38E",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 3500,
              "totalAmount": 140000
            },
            {
              "itemId": "INV-ALI-5115",
              "description": "AQUATILAPIA 25E",
              "category": "Alimento Concentrado",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 2575,
              "totalAmount": 103000
            },
            {
              "itemId": "INV-ALI-8276",
              "description": "PREPICO 100 DORADO",
              "category": "Alimento Concentrado",
              "quantity": 120,
              "unit": "kg",
              "unitPrice": 1875,
              "totalAmount": 225000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-15T23:23:48.600Z"
        },
        {
          "id": "PUR-613466",
          "date": "2026-08-13",
          "supplier": "AGROFUTURO EL PASO",
          "invoice": "FAC-3466",
          "category": "Insumos Varios",
          "description": "SAL MARINA (+1 producto más)",
          "quantity": 41,
          "unit": "kg",
          "unitPrice": 3146,
          "totalAmount": 129000,
          "items": [
            {
              "itemId": "INV-INS-0964",
              "description": "SAL MARINA",
              "category": "Insumos Varios",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 550,
              "totalAmount": 22000
            },
            {
              "itemId": "INV-MED-8042",
              "description": "KOXNIL",
              "category": "Medicamentos y Químicos",
              "quantity": 1,
              "unit": "kg",
              "unitPrice": 107000,
              "totalAmount": 107000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-19T20:36:53.466Z",
          "updatedAt": "2026-11-19T20:39:08.374Z"
        },
        {
          "id": "PUR-727036",
          "date": "2026-08-13",
          "supplier": "TECNOAQUA SAS",
          "invoice": "FAC-7036",
          "category": "Medicamentos y Químicos",
          "description": "FLORFENICOL",
          "quantity": 1,
          "unit": "kg",
          "unitPrice": 113000,
          "totalAmount": 113000,
          "items": [
            {
              "itemId": "INV-MED-0390",
              "description": "FLORFENICOL",
              "category": "Medicamentos y Químicos",
              "quantity": 1,
              "unit": "kg",
              "unitPrice": 113000,
              "totalAmount": 113000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-19T20:38:47.036Z",
          "updatedAt": "2026-11-19T20:40:07.523Z"
        },
        {
          "id": "PUR-927836",
          "date": "2026-08-17",
          "supplier": "AGROFUTURO EL PASO",
          "invoice": "FAC-7836",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 32",
          "quantity": 80,
          "unit": "kg",
          "unitPrice": 2925,
          "totalAmount": 234000,
          "items": [
            {
              "itemId": "INV-ALI-0991",
              "description": "AQUATILAPIA 32",
              "category": "Alimento Concentrado",
              "quantity": 80,
              "unit": "kg",
              "unitPrice": 2925,
              "totalAmount": 234000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-19T20:42:07.836Z"
        },
        {
          "id": "PUR-110557",
          "date": "2026-08-21",
          "supplier": "MONTEGRAL EL PASO",
          "invoice": "FAC-0557",
          "category": "Insumos Varios",
          "description": "SAL MARINA",
          "quantity": 25,
          "unit": "kg",
          "unitPrice": 720,
          "totalAmount": 18000,
          "items": [
            {
              "itemId": "INV-INS-0964",
              "description": "SAL MARINA",
              "category": "Insumos Varios",
              "quantity": 25,
              "unit": "kg",
              "unitPrice": 720,
              "totalAmount": 18000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-19T20:45:10.557Z"
        },
        {
          "id": "PUR-302497",
          "date": "2026-08-20",
          "supplier": "MONTEGRAL EL PASO",
          "invoice": "FAC-2497",
          "category": "Insumos Varios",
          "description": "SAL MARINA (+1 producto más)",
          "quantity": 26,
          "unit": "kg",
          "unitPrice": 923,
          "totalAmount": 24000,
          "items": [
            {
              "itemId": "INV-INS-0964",
              "description": "SAL MARINA",
              "category": "Insumos Varios",
              "quantity": 25,
              "unit": "kg",
              "unitPrice": 720,
              "totalAmount": 18000
            },
            {
              "itemId": "INV-MED-9751",
              "description": "VENENO",
              "category": "Medicamentos y Químicos",
              "quantity": 1,
              "unit": "unidades",
              "unitPrice": 6000,
              "totalAmount": 6000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-19T20:48:22.497Z"
        },
        {
          "id": "PUR-370975",
          "date": "2026-08-20",
          "supplier": "AGROPECUARIA EL CAMPO",
          "invoice": "FAC-0975",
          "category": "Alimento Concentrado",
          "description": "AQUATILAPIA 25E (+3 productos más)",
          "quantity": 202,
          "unit": "kg",
          "unitPrice": 3203,
          "totalAmount": 647000,
          "items": [
            {
              "itemId": "INV-ALI-5115",
              "description": "AQUATILAPIA 25E",
              "category": "Alimento Concentrado",
              "quantity": 160,
              "unit": "kg",
              "unitPrice": 2575,
              "totalAmount": 412000
            },
            {
              "itemId": "INV-INS-3354",
              "description": "CAL AGRICOLA",
              "category": "Insumos Varios",
              "quantity": 40,
              "unit": "kg",
              "unitPrice": 875,
              "totalAmount": 35000
            },
            {
              "itemId": "INV-MED-0390",
              "description": "FLORFENICOL",
              "category": "Medicamentos y Químicos",
              "quantity": 1,
              "unit": "kg",
              "unitPrice": 125000,
              "totalAmount": 125000
            },
            {
              "itemId": "INV-MED-7886",
              "description": "ENROFLOXACINA",
              "category": "Medicamentos y Químicos",
              "quantity": 1,
              "unit": "unidades",
              "unitPrice": 75000,
              "totalAmount": 75000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-19T20:49:30.975Z",
          "updatedAt": "2026-11-19T20:51:38.821Z"
        },
        {
          "id": "PUR-586349",
          "date": "2026-08-24",
          "supplier": "PROVEEDOR GENERAL",
          "invoice": "FAC-6348",
          "category": "Medicamentos y Químicos",
          "description": "MIXOIL",
          "quantity": 1,
          "unit": "unidades",
          "unitPrice": 190000,
          "totalAmount": 190000,
          "items": [
            {
              "itemId": "INV-MED-8235",
              "description": "MIXOIL",
              "category": "Medicamentos y Químicos",
              "quantity": 1,
              "unit": "unidades",
              "unitPrice": 190000,
              "totalAmount": 190000
            }
          ],
          "inventorySynced": true,
          "createdAt": "2026-11-19T20:53:06.349Z"
        }
      ],
      "inventory": [
        {
          "id": "INV-ALI-5236",
          "category": "Alimento Concentrado",
          "name": "MOJARRA # 25",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 760,
          "currentStockKg": 760,
          "minStock": 40,
          "minStockKg": 40,
          "costPerUnit": 2700,
          "costPerKg": 2700,
          "supplier": "AGROFUTURO EL PASO",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-10-29",
          "notes": ""
        },
        {
          "id": "INV-ALI-3367",
          "category": "Alimento Concentrado",
          "name": "MOJARRA # 30",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 40,
          "currentStockKg": 40,
          "minStock": 40,
          "minStockKg": 40,
          "costPerUnit": 2900,
          "costPerKg": 2900,
          "supplier": "AGROFUTURO EL PASO",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-09-10",
          "notes": ""
        },
        {
          "id": "INV-ALE-9782",
          "category": "Alevinos y Genética",
          "name": "ALEVINO MOJARRA NILOTICA",
          "brand": "ANDRES CUBILLOS",
          "hatchery": "ANDRES CUBILLOS",
          "lineage": "",
          "type": "Siembra",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "UND",
          "unit": "unid",
          "currentStock": 1000,
          "currentStockKg": 1000,
          "minStock": 5000,
          "minStockKg": 5000,
          "costPerUnit": 90,
          "costPerKg": 90,
          "supplier": "ANDRES CUBILLOS",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-09-14",
          "notes": ""
        },
        {
          "id": "INV-ALI-8276",
          "category": "Alimento Concentrado",
          "name": "PREPICO 100 DORADO",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 600,
          "currentStockKg": 600,
          "minStock": 40,
          "minStockKg": 40,
          "costPerUnit": 1875,
          "costPerKg": 1875,
          "supplier": "AGROPECUARIA EL CAMPO",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-11-07",
          "notes": ""
        },
        {
          "id": "INV-ALI-0353",
          "category": "Alimento Concentrado",
          "name": "AQUATILAPIA 45H",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 240,
          "currentStockKg": 240,
          "minStock": 40,
          "minStockKg": 40,
          "costPerUnit": 4000,
          "costPerKg": 4000,
          "supplier": "AGROPECUARIA EL CAMPO",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-11-07",
          "notes": ""
        },
        {
          "id": "INV-ALI-5115",
          "category": "Alimento Concentrado",
          "name": "AQUATILAPIA 25E",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 840,
          "currentStockKg": 840,
          "minStock": 40,
          "minStockKg": 40,
          "costPerUnit": 2575,
          "costPerKg": 2575,
          "supplier": "AGROPECUARIA EL CAMPO",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-08-20",
          "notes": ""
        },
        {
          "id": "INV-INS-0964",
          "category": "Insumos Varios",
          "name": "SAL MARINA",
          "brand": "General",
          "hatchery": "",
          "lineage": "",
          "type": "General",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 25 KLS",
          "unit": "kg",
          "currentStock": 230,
          "currentStockKg": 230,
          "minStock": 25,
          "minStockKg": 25,
          "costPerUnit": 720,
          "costPerKg": 720,
          "supplier": "AGROPECUARIA EL CAMPO",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-08-20",
          "notes": ""
        },
        {
          "id": "INV-ALE-4489",
          "category": "Alevinos y Genética",
          "name": "ALEVINO MOJARRA ROJA",
          "brand": "Criadero Certificado",
          "hatchery": "Criadero Certificado",
          "lineage": "",
          "type": "Siembra",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "UND",
          "unit": "unid",
          "currentStock": 30000,
          "currentStockKg": 30000,
          "minStock": 10000,
          "minStockKg": 10000,
          "costPerUnit": 90,
          "costPerKg": 90,
          "supplier": "ANDRES CUBILLOS HERRERA",
          "location": "",
          "status": "activo",
          "lastPurchaseDate": "2026-05-22",
          "notes": "",
          "lastUpdate": "2026-10-18T21:15:59.362Z"
        },
        {
          "id": "INV-ALI-8925",
          "category": "Alimento Concentrado",
          "name": "MOJARRA # 45",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 80,
          "currentStockKg": 80,
          "minStock": 40,
          "minStockKg": 40,
          "costPerUnit": 4420,
          "costPerKg": 4420,
          "supplier": "AGROCAM",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-10-20",
          "notes": ""
        },
        {
          "id": "INV-ALI-9083",
          "category": "Alimento Concentrado",
          "name": "AQUATILAPIA 38E",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 400,
          "currentStockKg": 400,
          "minStock": 40,
          "minStockKg": 40,
          "costPerUnit": 3500,
          "costPerKg": 3500,
          "supplier": "AGROPECUARIA EL CAMPO",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-11-07",
          "notes": ""
        },
        {
          "id": "INV-ALI-6963",
          "category": "Alimento Concentrado",
          "name": "AQUATILAPIA 45EXT",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 200,
          "currentStockKg": 200,
          "minStock": 400,
          "minStockKg": 400,
          "costPerUnit": 4100,
          "costPerKg": 4100,
          "supplier": "AGROPECUARIA EL CAMPO",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-11-07",
          "notes": ""
        },
        {
          "id": "INV-MED-8042",
          "category": "Probióticos y Vitaminas",
          "name": "KOXNIL",
          "brand": "General",
          "hatchery": "",
          "lineage": "",
          "type": "Sanitario",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "KL",
          "unit": "kg",
          "currentStock": 3,
          "currentStockKg": 3,
          "minStock": 10,
          "minStockKg": 10,
          "costPerUnit": 107000,
          "costPerKg": 107000,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-08-13",
          "notes": ""
        },
        {
          "id": "INV-MED-5406",
          "category": "Probióticos y Vitaminas",
          "name": "PROBIOTICO",
          "brand": "General",
          "hatchery": "",
          "lineage": "",
          "type": "Sanitario",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "LITROS",
          "unit": "L",
          "currentStock": 1,
          "currentStockKg": 1,
          "minStock": 10,
          "minStockKg": 10,
          "costPerUnit": 50000,
          "costPerKg": 50000,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-06-11",
          "notes": ""
        },
        {
          "id": "INV-MED-8166",
          "category": "Probióticos y Vitaminas",
          "name": "MATACLORO",
          "brand": "General",
          "hatchery": "",
          "lineage": "",
          "type": "Sanitario",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "FRASCO X 50 GRS",
          "unit": "g",
          "currentStock": 1,
          "currentStockKg": 1,
          "minStock": 500,
          "minStockKg": 500,
          "costPerUnit": 10000,
          "costPerKg": 10000,
          "supplier": "ASIA ACUICULTURA",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-06-11",
          "notes": ""
        },
        {
          "id": "INV-MED-5914",
          "category": "Probióticos y Vitaminas",
          "name": "LEVADURA",
          "brand": "General",
          "hatchery": "",
          "lineage": "",
          "type": "Sanitario",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "KL",
          "unit": "kg",
          "currentStock": 1,
          "currentStockKg": 1,
          "minStock": 10,
          "minStockKg": 10,
          "costPerUnit": 12700,
          "costPerKg": 12700,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-07-04",
          "notes": ""
        },
        {
          "id": "INV-ALI-5812",
          "category": "Alimento Concentrado",
          "name": "AQUATILAPIA 34",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 320,
          "currentStockKg": 320,
          "minStock": 120,
          "minStockKg": 120,
          "costPerUnit": 3000,
          "costPerKg": 3000,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-08-04",
          "notes": ""
        },
        {
          "id": "INV-INS-3354",
          "category": "Fertilizantes y Cal",
          "name": "CAL AGRICOLA",
          "brand": "General",
          "hatchery": "",
          "lineage": "",
          "type": "General",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 240,
          "currentStockKg": 240,
          "minStock": 40,
          "minStockKg": 40,
          "costPerUnit": 875,
          "costPerKg": 875,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-08-20",
          "notes": ""
        },
        {
          "id": "INV-ALI-3670",
          "category": "Alimento Concentrado",
          "name": "MELAZA",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "30 KILOS",
          "unit": "kg",
          "currentStock": 30,
          "currentStockKg": 30,
          "minStock": 60,
          "minStockKg": 60,
          "costPerUnit": 2167,
          "costPerKg": 2167,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-11-07",
          "notes": ""
        },
        {
          "id": "INV-MED-0390",
          "category": "Medicamentos y Químicos",
          "name": "FLORFENICOL",
          "brand": "General",
          "hatchery": "",
          "lineage": "",
          "type": "Sanitario",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "KILO",
          "unit": "kg",
          "currentStock": 4,
          "currentStockKg": 4,
          "minStock": 20,
          "minStockKg": 20,
          "costPerUnit": 125000,
          "costPerKg": 125000,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-08-20",
          "notes": ""
        },
        {
          "id": "INV-ALI-0991",
          "category": "Alimento Concentrado",
          "name": "AQUATILAPIA 32",
          "brand": "Genérico",
          "hatchery": "",
          "lineage": "",
          "type": "Engorde",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "BULTO 40 KLS",
          "unit": "kg",
          "currentStock": 80,
          "currentStockKg": 80,
          "minStock": 80,
          "minStockKg": 80,
          "costPerUnit": 2925,
          "costPerKg": 2925,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-08-17",
          "notes": ""
        },
        {
          "id": "INV-MED-9751",
          "category": "Medicamentos y Químicos",
          "name": "VENENO",
          "brand": "General",
          "hatchery": "",
          "lineage": "",
          "type": "Sanitario",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "UND",
          "unit": "unid",
          "currentStock": 1,
          "currentStockKg": 1,
          "minStock": 10,
          "minStockKg": 10,
          "costPerUnit": 6000,
          "costPerKg": 6000,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-08-20",
          "notes": ""
        },
        {
          "id": "INV-MED-7886",
          "category": "Medicamentos y Químicos",
          "name": "ENROFLOXACINA",
          "brand": "General",
          "hatchery": "",
          "lineage": "",
          "type": "Sanitario",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "LITRO",
          "unit": "L",
          "currentStock": 1,
          "currentStockKg": 1,
          "minStock": 2,
          "minStockKg": 2,
          "costPerUnit": 75000,
          "costPerKg": 75000,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-08-20",
          "notes": ""
        },
        {
          "id": "INV-MED-8235",
          "category": "Medicamentos y Químicos",
          "name": "MIXOIL",
          "brand": "General",
          "hatchery": "",
          "lineage": "",
          "type": "Sanitario",
          "proteinPct": 0,
          "activeIngredient": "",
          "withdrawalDays": 0,
          "presentation": "LITRO",
          "unit": "L",
          "currentStock": 1,
          "currentStockKg": 1,
          "minStock": 2,
          "minStockKg": 2,
          "costPerUnit": 190000,
          "costPerKg": 190000,
          "supplier": "Proveedor Local",
          "location": "Bodega Principal",
          "status": "activo",
          "lastPurchaseDate": "2026-08-24",
          "notes": ""
        }
      ],
      "inventoryMovements": [
        {
          "id": "MOV-INI-INV-ALI-5236-303",
          "date": "2026-10-17",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5236",
          "itemName": "MOJARRA # 25",
          "quantity": 0,
          "unit": "kg",
          "unitCost": 2850,
          "totalCost": 0,
          "reference": "Inventario Inicial / Saldo de Apertura",
          "destination": "Bodega Principal",
          "balanceAfter": 440,
          "notes": "Saldo inicial registrado en catálogo de bodega: 0 kg"
        },
        {
          "id": "MOV-042290-52",
          "date": "2026-09-10",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5236",
          "itemName": "MOJARRA # 25",
          "quantity": 120,
          "unit": "kg",
          "unitCost": 2850,
          "totalCost": 342000,
          "reference": "Factura FAC-2290",
          "destination": "Bodega Principal",
          "balanceAfter": 120,
          "notes": "Compra a AGROFUTURO EL PASO: 120 kg (MOJARRA # 25)"
        },
        {
          "id": "MOV-042290-380",
          "date": "2026-09-10",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-3367",
          "itemName": "MOJARRA # 30",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 2900,
          "totalCost": 116000,
          "reference": "Factura FAC-2290",
          "destination": "Bodega Principal",
          "balanceAfter": 40,
          "notes": "Compra a AGROFUTURO EL PASO: 40 kg (MOJARRA # 30)"
        },
        {
          "id": "MOV-077126-788",
          "date": "2026-09-14",
          "type": "entrada",
          "category": "Alevinos y Genética",
          "itemId": "INV-ALE-9782",
          "itemName": "ALEVINO MOJARRA NILOTICA",
          "quantity": 5000,
          "unit": "unid",
          "unitCost": 90,
          "totalCost": 450000,
          "reference": "Factura FAC-7126",
          "destination": "Bodega Principal",
          "balanceAfter": 5000,
          "notes": "Compra a ANDRES CUBILLOS HERRERA: 5000 unidades (ALEVINO MOJARRA NILOTICA)"
        },
        {
          "id": "MOV-125584-691",
          "date": "2026-09-14",
          "type": "entrada",
          "category": "Alevinos y Genética",
          "purchaseId": "PUR-077126",
          "itemId": "INV-ALE-4489",
          "itemName": "MOJARRA ROJA",
          "quantity": 10000,
          "unit": "unid",
          "unitCost": 90,
          "totalCost": 900000,
          "reference": "Factura FAC-7126",
          "destination": "Bodega Principal",
          "balanceAfter": 10000,
          "notes": "Recepción de compra a ANDRES CUBILLOS HERRERA: 10000 unidades (MOJARRA ROJA)"
        },
        {
          "id": "MOV-INI-INV-ALI-8276-202",
          "date": "2026-10-18",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-8276",
          "itemName": "PREPICO 100 DORADO",
          "quantity": 0,
          "unit": "kg",
          "unitCost": 2125,
          "totalCost": 0,
          "reference": "Inventario Inicial / Saldo de Apertura",
          "destination": "Bodega Principal",
          "balanceAfter": 320,
          "notes": "Saldo inicial registrado en catálogo de bodega: 0 kg"
        },
        {
          "id": "MOV-INI-INV-ALI-0353-149",
          "date": "2026-10-18",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-0353",
          "itemName": "AQUATILAPIA 45H",
          "quantity": 0,
          "unit": "kg",
          "unitCost": 4050,
          "totalCost": 0,
          "reference": "Inventario Inicial / Saldo de Apertura",
          "destination": "Bodega Principal",
          "balanceAfter": 80,
          "notes": "Saldo inicial registrado en catálogo de bodega: 0 kg"
        },
        {
          "id": "MOV-INI-INV-ALI-5115-919",
          "date": "2026-10-18",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5115",
          "itemName": "AQUATILAPIA 25E",
          "quantity": 0,
          "unit": "kg",
          "unitCost": 2575,
          "totalCost": 0,
          "reference": "Inventario Inicial / Saldo de Apertura",
          "destination": "Bodega Principal",
          "balanceAfter": 400,
          "notes": "Saldo inicial registrado en catálogo de bodega: 0 kg"
        },
        {
          "id": "MOV-INI-INV-INS-0964-817",
          "date": "2026-10-18",
          "type": "entrada",
          "category": "Insumos Varios",
          "itemId": "INV-INS-0964",
          "itemName": "SAL MARINA",
          "quantity": 0,
          "unit": "kg",
          "unitCost": 520,
          "totalCost": 0,
          "reference": "Inventario Inicial / Saldo de Apertura",
          "destination": "Bodega Principal",
          "balanceAfter": 100,
          "notes": "Saldo inicial registrado en catálogo de bodega: 0 kg"
        },
        {
          "id": "MOV-234790-671",
          "date": "2026-09-19",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5236",
          "itemName": "MOJARRA # 25",
          "quantity": 200,
          "unit": "kg",
          "unitCost": 2850,
          "totalCost": 570000,
          "reference": "Factura FAC-4790",
          "destination": "Bodega Principal",
          "balanceAfter": 320,
          "notes": "Compra a PROVEEDOR GENERAL: 200 kg (MOJARRA # 25)"
        },
        {
          "id": "MOV-259485-164",
          "date": "2026-09-19",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "purchaseId": "PUR-234790",
          "itemId": "INV-ALI-8276",
          "itemName": "PREPICO 100 DORADO",
          "quantity": 80,
          "unit": "kg",
          "unitCost": 2125,
          "totalCost": 170000,
          "reference": "Factura FAC-4790",
          "destination": "Bodega Principal",
          "balanceAfter": 80,
          "notes": "Recepción de compra a PROVEEDOR GENERAL: 80 kg (PREPICO 100 DORADO)"
        },
        {
          "id": "MOV-323282-664",
          "date": "2026-09-21",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-0353",
          "itemName": "AQUATILAPIA 45H",
          "quantity": 80,
          "unit": "kg",
          "unitCost": 4050,
          "totalCost": 324000,
          "reference": "Factura 12338",
          "destination": "Bodega Principal",
          "balanceAfter": 80,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 80 kg (AQUATILAPIA 45H)"
        },
        {
          "id": "MOV-323282-923",
          "date": "2026-09-21",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5115",
          "itemName": "AQUATILAPIA 25E",
          "quantity": 200,
          "unit": "kg",
          "unitCost": 2575,
          "totalCost": 515000,
          "reference": "Factura 12338",
          "destination": "Bodega Principal",
          "balanceAfter": 200,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 200 kg (AQUATILAPIA 25E)"
        },
        {
          "id": "MOV-323282-717",
          "date": "2026-09-21",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-8276",
          "itemName": "PREPICO 100 DORADO",
          "quantity": 120,
          "unit": "kg",
          "unitCost": 1925,
          "totalCost": 231000,
          "reference": "Factura 12338",
          "destination": "Bodega Principal",
          "balanceAfter": 200,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 120 kg (PREPICO 100 DORADO)"
        },
        {
          "id": "MOV-365159-930",
          "date": "2026-09-22",
          "type": "entrada",
          "category": "Insumos Varios",
          "itemId": "INV-INS-0964",
          "itemName": "SAL MARINA",
          "quantity": 100,
          "unit": "kg",
          "unitCost": 520,
          "totalCost": 52000,
          "reference": "Factura FAC-5159",
          "destination": "Bodega Principal",
          "balanceAfter": 100,
          "notes": "Compra a PROVEEDOR GENERAL: 100 kg (SAL MARINA)"
        },
        {
          "id": "MOV-365159-880",
          "date": "2026-09-22",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-8276",
          "itemName": "PREPICO 100 DORADO",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 2125,
          "totalCost": 85000,
          "reference": "Factura FAC-5159",
          "destination": "Bodega Principal",
          "balanceAfter": 240,
          "notes": "Compra a PROVEEDOR GENERAL: 40 kg (PREPICO 100 DORADO)"
        },
        {
          "id": "MOV-139260-429",
          "date": "2026-10-06",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-8276",
          "itemName": "PREPICO 100 DORADO",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 2000,
          "totalCost": 80000,
          "reference": "Factura FAC-9259",
          "destination": "Bodega Principal",
          "balanceAfter": 280,
          "notes": "Compra a AGROMATERIALES PORCIPOLLOS: 40 kg (PREPICO 100 DORADO)"
        },
        {
          "id": "MOV-139260-563",
          "date": "2026-10-06",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5115",
          "itemName": "AQUATILAPIA 25E",
          "quantity": 120,
          "unit": "kg",
          "unitCost": 2625,
          "totalCost": 315000,
          "reference": "Factura FAC-9259",
          "destination": "Bodega Principal",
          "balanceAfter": 320,
          "notes": "Compra a AGROMATERIALES PORCIPOLLOS: 120 kg (AQUATILAPIA 25E)"
        },
        {
          "id": "MOV-299795-134",
          "date": "2026-10-08",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5236",
          "itemName": "MOJARRA # 25",
          "quantity": 120,
          "unit": "kg",
          "unitCost": 3084,
          "totalCost": 370080,
          "reference": "Factura 8786",
          "destination": "Bodega Principal",
          "balanceAfter": 440,
          "notes": "Compra a AGROCAM: 120 kg (MOJARRA # 25)"
        },
        {
          "id": "MOV-472101-315",
          "date": "2026-10-15",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5115",
          "itemName": "AQUATILAPIA 25E",
          "quantity": 80,
          "unit": "kg",
          "unitCost": 2625,
          "totalCost": 210000,
          "reference": "Factura FAC-2101",
          "destination": "Bodega Principal",
          "balanceAfter": 400,
          "notes": "Compra a AGROCAM: 80 kg (AQUATILAPIA 25E)"
        },
        {
          "id": "MOV-582544-513",
          "date": "2026-10-16",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-8276",
          "itemName": "PREPICO 100 DORADO",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 2075,
          "totalCost": 83000,
          "reference": "Factura 8797",
          "destination": "Bodega Principal",
          "balanceAfter": 320,
          "notes": "Compra a AGROCAM: 40 kg (PREPICO 100 DORADO)"
        },
        {
          "id": "MOV-631116-984",
          "date": "2026-10-16",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "purchaseId": "PUR-582544",
          "itemId": "INV-ALI-8925",
          "itemName": "MOJARRA # 45",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 4200,
          "totalCost": 168000,
          "reference": "Factura 8797",
          "destination": "Bodega Principal",
          "balanceAfter": 40,
          "notes": "Recepción de compra a AGROCAM: 40 kg (MOJARRA # 45)"
        },
        {
          "id": "MOV-754703-373",
          "date": "2026-10-20",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-8925",
          "itemName": "MOJARRA # 45",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 4420,
          "totalCost": 176800,
          "reference": "Factura 3183601",
          "destination": "Bodega Principal",
          "balanceAfter": 80,
          "notes": "Compra a AGROPAISA: 40 kg (MOJARRA # 45)"
        },
        {
          "id": "MOV-874261-387",
          "date": "2026-10-20",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-9083",
          "itemName": "AQUATILAPIA 38E",
          "quantity": 160,
          "unit": "kg",
          "unitCost": 3500,
          "totalCost": 560000,
          "reference": "Factura 13798",
          "destination": "Bodega Principal",
          "balanceAfter": 160,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 160 kg (AQUATILAPIA 38E)"
        },
        {
          "id": "MOV-874261-522",
          "date": "2026-10-20",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-8276",
          "itemName": "PREPICO 100 DORADO",
          "quantity": 120,
          "unit": "kg",
          "unitCost": 1875,
          "totalCost": 225000,
          "reference": "Factura 13798",
          "destination": "Bodega Principal",
          "balanceAfter": 440,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 120 kg (PREPICO 100 DORADO)"
        },
        {
          "id": "MOV-244672-362",
          "date": "2026-05-24",
          "type": "salida",
          "category": "Alevinos y Genética",
          "itemId": "INV-ALE-9782",
          "itemName": "ALEVINO MOJARRA NILOTICA",
          "quantity": 10000,
          "unit": "unid",
          "unitCost": 90,
          "totalCost": 900000,
          "reference": "Siembra Lote LOTE-05-24-R",
          "destination": "Unidad G-01",
          "balanceAfter": 0,
          "notes": "Descarga por siembra de 10000 peces en G-01 (Lote LOTE-05-24-R)"
        },
        {
          "id": "MOV-287709-381",
          "date": "2026-06-11",
          "type": "salida",
          "category": "Alevinos y Genética",
          "itemId": "INV-ALE-9782",
          "itemName": "ALEVINO MOJARRA NILOTICA",
          "quantity": 4000,
          "unit": "unid",
          "unitCost": 90,
          "totalCost": 360000,
          "reference": "Siembra Lote LOTE-06-11-N",
          "destination": "Unidad G-02",
          "balanceAfter": 0,
          "notes": "Descarga por siembra de 4000 peces en G-02 (Lote LOTE-06-11-N)"
        },
        {
          "id": "MOV-231728-744",
          "date": "2026-05-22",
          "type": "entrada",
          "category": "Alevinos y Genética",
          "itemId": "INV-ALE-4489",
          "itemName": "ALEVINO MOJARRA ROJA",
          "quantity": 10000,
          "unit": "unid",
          "unitCost": 90,
          "totalCost": 900000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 30000,
          "notes": "Compra a FINCA EL DIAMANTE: 10000 unidades (ALEVINO MOJARRA ROJA)"
        },
        {
          "id": "MOV-470929-276",
          "date": "2026-11-07",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-6963",
          "itemName": "AQUATILAPIA 45EXT",
          "quantity": 80,
          "unit": "kg",
          "unitCost": 4100,
          "totalCost": 328000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 80,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 80 kg (AQUATILAPIA 45EXT)"
        },
        {
          "id": "MOV-470929-144",
          "date": "2026-11-07",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-0353",
          "itemName": "AQUATILAPIA 45H",
          "quantity": 80,
          "unit": "kg",
          "unitCost": 4000,
          "totalCost": 320000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 160,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 80 kg (AQUATILAPIA 45H)"
        },
        {
          "id": "MOV-344143-937",
          "date": "2026-06-20",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-0353",
          "itemName": "AQUATILAPIA 45H",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 4000,
          "totalCost": 160000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 200,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 40 kg (AQUATILAPIA 45H)"
        },
        {
          "id": "MOV-344143-640",
          "date": "2026-06-20",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-6963",
          "itemName": "AQUATILAPIA 45EXT",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 4100,
          "totalCost": 164000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 120,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 40 kg (AQUATILAPIA 45EXT)"
        },
        {
          "id": "MOV-643080-448",
          "date": "2026-06-11",
          "type": "entrada",
          "category": "Probióticos y Vitaminas",
          "itemId": "INV-MED-8042",
          "itemName": "KOXNIL",
          "quantity": 2,
          "unit": "kg",
          "unitCost": 107000,
          "totalCost": 214000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 2,
          "notes": "Compra a TECNOAQUA SAS: 2 kg (KOXNIL)"
        },
        {
          "id": "MOV-915661-606",
          "date": "2026-06-11",
          "type": "entrada",
          "category": "Probióticos y Vitaminas",
          "itemId": "INV-MED-8166",
          "itemName": "MATACLORO",
          "quantity": 1,
          "unit": "g",
          "unitCost": 10000,
          "totalCost": 10000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 1,
          "notes": "Compra a ASIA ACUICULTURA: 1 unidades (MATACLORO)"
        },
        {
          "id": "MOV-915661-571",
          "date": "2026-06-11",
          "type": "entrada",
          "category": "Probióticos y Vitaminas",
          "itemId": "INV-MED-5406",
          "itemName": "PROBIOTICO",
          "quantity": 1,
          "unit": "L",
          "unitCost": 50000,
          "totalCost": 50000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 1,
          "notes": "Compra a ASIA ACUICULTURA: 1 litros (PROBIOTICO)"
        },
        {
          "id": "MOV-032854-269",
          "date": "2026-07-04",
          "type": "entrada",
          "category": "Probióticos y Vitaminas",
          "itemId": "INV-MED-5914",
          "itemName": "LEVADURA",
          "quantity": 1,
          "unit": "kg",
          "unitCost": 12700,
          "totalCost": 12700,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 1,
          "notes": "Compra a PROVEEDOR GENERAL: 1 kg (LEVADURA)"
        },
        {
          "id": "MOV-296558-771",
          "date": "2026-07-15",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-9083",
          "itemName": "AQUATILAPIA 38E",
          "quantity": 80,
          "unit": "kg",
          "unitCost": 3550,
          "totalCost": 284000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 240,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 80 kg (AQUATILAPIA 38E)"
        },
        {
          "id": "MOV-363831-626",
          "date": "2026-07-24",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-9083",
          "itemName": "AQUATILAPIA 38E",
          "quantity": 120,
          "unit": "kg",
          "unitCost": 3550,
          "totalCost": 426000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 360,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 120 kg (AQUATILAPIA 38E)"
        },
        {
          "id": "MOV-509905-275",
          "date": "2026-07-31",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5812",
          "itemName": "AQUATILAPIA 34",
          "quantity": 80,
          "unit": "kg",
          "unitCost": 3050,
          "totalCost": 244000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 80,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 80 kg (AQUATILAPIA 34)"
        },
        {
          "id": "MOV-673344-512",
          "date": "2026-08-04",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5812",
          "itemName": "AQUATILAPIA 34",
          "quantity": 120,
          "unit": "kg",
          "unitCost": 3000,
          "totalCost": 360000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 200,
          "notes": "Compra a CAMPOVALLENATO: 120 kg (AQUATILAPIA 34)"
        },
        {
          "id": "MOV-738409-507",
          "date": "2026-08-04",
          "type": "entrada",
          "category": "Fertilizantes y Cal",
          "purchaseId": "PUR-673344",
          "itemId": "INV-INS-3354",
          "itemName": "CAL AGRICOLA",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 875,
          "totalCost": 35000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 40,
          "notes": "Recepción de compra a CAMPOVALLENATO: 40 kg (CAL AGRICOLA)"
        },
        {
          "id": "MOV-863144-746",
          "date": "2026-08-08",
          "type": "entrada",
          "category": "Fertilizantes y Cal",
          "itemId": "INV-INS-3354",
          "itemName": "CAL AGRICOLA",
          "quantity": 120,
          "unit": "kg",
          "unitCost": 1200,
          "totalCost": 144000,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 160,
          "notes": "Compra a CAMPOVALLENATO: 120 kg (CAL AGRICOLA)"
        },
        {
          "id": "MOV-761266-963",
          "date": "2026-10-29",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5236",
          "itemName": "MOJARRA # 25",
          "quantity": 120,
          "unit": "kg",
          "unitCost": 2700,
          "totalCost": 324000,
          "reference": "Factura 0794",
          "destination": "Bodega Principal",
          "balanceAfter": 760,
          "notes": "Compra a AGROCAM: 120 kg (MOJARRA # 25)"
        },
        {
          "id": "MOV-028600-208",
          "date": "2026-11-07",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-9083",
          "itemName": "AQUATILAPIA 38E",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 3500,
          "totalCost": 140000,
          "reference": "Factura 14808",
          "destination": "Bodega Principal",
          "balanceAfter": 400,
          "notes": "Compra a AGROFUTURO EL PASO: 40 kg (AQUATILAPIA 38E)"
        },
        {
          "id": "MOV-028601-767",
          "date": "2026-11-07",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5115",
          "itemName": "AQUATILAPIA 25E",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 2575,
          "totalCost": 103000,
          "reference": "Factura 14808",
          "destination": "Bodega Principal",
          "balanceAfter": 520,
          "notes": "Compra a AGROFUTURO EL PASO: 40 kg (AQUATILAPIA 25E)"
        },
        {
          "id": "MOV-028601-521",
          "date": "2026-11-07",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-8276",
          "itemName": "PREPICO 100 DORADO",
          "quantity": 120,
          "unit": "kg",
          "unitCost": 1875,
          "totalCost": 225000,
          "reference": "Factura 14808",
          "destination": "Bodega Principal",
          "balanceAfter": 600,
          "notes": "Compra a AGROFUTURO EL PASO: 120 kg (PREPICO 100 DORADO)"
        },
        {
          "id": "MOV-101351-127",
          "date": "2026-11-07",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "purchaseId": "PUR-470928",
          "itemId": "INV-ALI-3670",
          "itemName": "MELAZA",
          "quantity": 30,
          "unit": "kg",
          "unitCost": 2167,
          "totalCost": 65010,
          "reference": "Factura 0",
          "destination": "Bodega Principal",
          "balanceAfter": 30,
          "notes": "Recepción de compra a AGROPECUARIA EL CAMPO: 30 kg (MELAZA)"
        },
        {
          "id": "MOV-613467-604",
          "date": "2026-08-13",
          "type": "entrada",
          "category": "Insumos Varios",
          "itemId": "INV-INS-0964",
          "itemName": "SAL MARINA",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 550,
          "totalCost": 22000,
          "reference": "Factura FAC-3466",
          "destination": "Bodega Principal",
          "balanceAfter": 140,
          "notes": "Compra a AGROFUTURO EL PASO: 40 kg (SAL MARINA)"
        },
        {
          "id": "MOV-727036-831",
          "date": "2026-11-19",
          "type": "entrada",
          "category": "Medicamentos y Químicos",
          "itemId": "INV-MED-0390",
          "itemName": "FLORFENICOL",
          "quantity": 1,
          "unit": "kg",
          "unitCost": 113000,
          "totalCost": 113000,
          "reference": "Factura FAC-7036",
          "destination": "Bodega Principal",
          "balanceAfter": 1,
          "notes": "Compra a TECNOAQUA SAS: 1 kg (FLORFENICOL)"
        },
        {
          "id": "MOV-748393-18",
          "date": "2026-08-13",
          "type": "entrada",
          "category": "Probióticos y Vitaminas",
          "purchaseId": "PUR-613466",
          "itemId": "INV-MED-8042",
          "itemName": "KOXNIL",
          "quantity": 1,
          "unit": "kg",
          "unitCost": 107000,
          "totalCost": 107000,
          "reference": "Factura FAC-3466",
          "destination": "Bodega Principal",
          "balanceAfter": 3,
          "notes": "Recepción de compra a AGROFUTURO EL PASO: 1 kg (KOXNIL)"
        },
        {
          "id": "MOV-927837-607",
          "date": "2026-08-17",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-0991",
          "itemName": "AQUATILAPIA 32",
          "quantity": 80,
          "unit": "kg",
          "unitCost": 2925,
          "totalCost": 234000,
          "reference": "Factura FAC-7836",
          "destination": "Bodega Principal",
          "balanceAfter": 80,
          "notes": "Compra a AGROFUTURO EL PASO: 80 kg (AQUATILAPIA 32)"
        },
        {
          "id": "MOV-110557-613",
          "date": "2026-08-21",
          "type": "entrada",
          "category": "Insumos Varios",
          "itemId": "INV-INS-0964",
          "itemName": "SAL MARINA",
          "quantity": 25,
          "unit": "kg",
          "unitCost": 720,
          "totalCost": 18000,
          "reference": "Factura FAC-0557",
          "destination": "Bodega Principal",
          "balanceAfter": 205,
          "notes": "Compra a MONTEGRAL EL PASO: 25 kg (SAL MARINA)"
        },
        {
          "id": "MOV-302497-815",
          "date": "2026-08-20",
          "type": "entrada",
          "category": "Insumos Varios",
          "itemId": "INV-INS-0964",
          "itemName": "SAL MARINA",
          "quantity": 25,
          "unit": "kg",
          "unitCost": 720,
          "totalCost": 18000,
          "reference": "Factura FAC-2497",
          "destination": "Bodega Principal",
          "balanceAfter": 230,
          "notes": "Compra a MONTEGRAL EL PASO: 25 kg (SAL MARINA)"
        },
        {
          "id": "MOV-302497-904",
          "date": "2026-08-20",
          "type": "entrada",
          "category": "Medicamentos y Químicos",
          "itemId": "INV-MED-9751",
          "itemName": "VENENO",
          "quantity": 1,
          "unit": "unid",
          "unitCost": 6000,
          "totalCost": 6000,
          "reference": "Factura FAC-2497",
          "destination": "Bodega Principal",
          "balanceAfter": 1,
          "notes": "Compra a MONTEGRAL EL PASO: 1 unidades (VENENO)"
        },
        {
          "id": "MOV-370975-280",
          "date": "2026-08-20",
          "type": "entrada",
          "category": "Alimento Concentrado",
          "itemId": "INV-ALI-5115",
          "itemName": "AQUATILAPIA 25E",
          "quantity": 160,
          "unit": "kg",
          "unitCost": 2575,
          "totalCost": 412000,
          "reference": "Factura FAC-0975",
          "destination": "Bodega Principal",
          "balanceAfter": 680,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 160 kg (AQUATILAPIA 25E)"
        },
        {
          "id": "MOV-370975-244",
          "date": "2026-08-20",
          "type": "entrada",
          "category": "Fertilizantes y Cal",
          "itemId": "INV-INS-3354",
          "itemName": "CAL AGRICOLA",
          "quantity": 40,
          "unit": "kg",
          "unitCost": 875,
          "totalCost": 35000,
          "reference": "Factura FAC-0975",
          "destination": "Bodega Principal",
          "balanceAfter": 200,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 40 kg (CAL AGRICOLA)"
        },
        {
          "id": "MOV-370975-991",
          "date": "2026-08-20",
          "type": "entrada",
          "category": "Medicamentos y Químicos",
          "itemId": "INV-MED-0390",
          "itemName": "FLORFENICOL",
          "quantity": 1,
          "unit": "kg",
          "unitCost": 125000,
          "totalCost": 125000,
          "reference": "Factura FAC-0975",
          "destination": "Bodega Principal",
          "balanceAfter": 3,
          "notes": "Compra a AGROPECUARIA EL CAMPO: 1 kg (FLORFENICOL)"
        },
        {
          "id": "MOV-498838-345",
          "date": "2026-08-20",
          "type": "entrada",
          "category": "Medicamentos y Químicos",
          "purchaseId": "PUR-370975",
          "itemId": "INV-MED-7886",
          "itemName": "ENROFLOXACINA",
          "quantity": 1,
          "unit": "L",
          "unitCost": 75000,
          "totalCost": 75000,
          "reference": "Factura FAC-0975",
          "destination": "Bodega Principal",
          "balanceAfter": 1,
          "notes": "Recepción de compra a AGROPECUARIA EL CAMPO: 1 unidades (ENROFLOXACINA)"
        },
        {
          "id": "MOV-586349-964",
          "date": "2026-08-24",
          "type": "entrada",
          "category": "Medicamentos y Químicos",
          "itemId": "INV-MED-8235",
          "itemName": "MIXOIL",
          "quantity": 1,
          "unit": "L",
          "unitCost": 190000,
          "totalCost": 190000,
          "reference": "Factura FAC-6348",
          "destination": "Bodega Principal",
          "balanceAfter": 1,
          "notes": "Compra a PROVEEDOR GENERAL: 1 unidades (MIXOIL)"
        }
      ],
      "expenses": [
        {
          "id": "GAS-3762",
          "date": "2026-09-21",
          "category": "Transporte y Fletes",
          "recipient": "EDS La 15",
          "description": "TANQUEO GASOLINA",
          "amount": 138057,
          "paymentMethod": "Transferencia Bancaria"
        },
        {
          "id": "GAS-8609",
          "date": "2026-09-22",
          "category": "Transporte y Fletes",
          "recipient": "ANDRES CUBILLOS",
          "description": "TRANSPORTE ALEVINOS",
          "amount": 150000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-4748",
          "date": "2026-10-18",
          "category": "SERVICIOS PUBLICOS",
          "recipient": "INTERNET",
          "description": "PAGO INTERNET SEPTIEMBRE",
          "amount": 60000,
          "paymentMethod": "Transferencia Bancaria"
        },
        {
          "id": "GAS-4293",
          "date": "2026-09-22",
          "category": "Transporte y Fletes",
          "recipient": "EDS La 15",
          "description": "Tanqueo Gasolina",
          "amount": 50000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-6418",
          "date": "2026-09-22",
          "category": "Otros Gastos",
          "recipient": "General",
          "description": "LIMA Y CUCHILLA DE GUADAÑA",
          "amount": 28000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-6017",
          "date": "2026-09-27",
          "category": "Mantenimiento y Obra",
          "recipient": "General",
          "description": "ADELANTO ARREGLO BOMBA SUMERGIBLE",
          "amount": 300000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-5159",
          "date": "2026-09-29",
          "category": "Mantenimiento y Adecuaciones",
          "recipient": "Javier Rivera Armenta",
          "description": "Pago final arreglo de bomba sumergible",
          "amount": 475000,
          "paymentMethod": "Transferencia Bancaria"
        },
        {
          "id": "GAS-2450",
          "date": "2026-10-08",
          "category": "Transporte y Fletes",
          "recipient": "AGROCAM",
          "description": "TRANSPORTE 3 BULTOS MOJARRA 25",
          "amount": 25000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-0769",
          "date": "2026-10-15",
          "category": "Transporte y Fletes",
          "recipient": "AGROCAM",
          "description": "TRANSPORTE 2 BULTOS DE AQUATILAPIA 25",
          "amount": 4000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-1898",
          "date": "2026-10-16",
          "category": "Transporte y Fletes",
          "recipient": "AGROCAM",
          "description": "TRANSPORTE AGROCAM 16 OCTUBRE FACT 8797",
          "amount": 25000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-0058",
          "date": "2026-10-20",
          "category": "Otros Gastos",
          "recipient": "TIENDAS D1",
          "description": "ALIMENTACION Y ASEO COSECHA 21 OCTUBRE",
          "amount": 70340,
          "paymentMethod": "Transferencia Bancaria"
        },
        {
          "id": "GAS-0662",
          "date": "2026-10-20",
          "category": "SERVICIOS PUBLICOS",
          "recipient": "INTERNET",
          "description": "INTERNET MES DE SEPTIEMBRE",
          "amount": 60000,
          "paymentMethod": "Transferencia Bancaria"
        },
        {
          "id": "GAS-7145",
          "date": "2026-05-23",
          "category": "Transporte y Fletes",
          "recipient": "EDS La 15",
          "description": "GASOLINA ",
          "amount": 72000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-7424",
          "date": "2026-05-24",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "PEAJES",
          "amount": 12500,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-7840",
          "date": "2026-05-24",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "PEAJE",
          "amount": 12500,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-5460",
          "date": "2026-05-24",
          "category": "Combustibles y Energía",
          "recipient": "PROVEEDOR GENERAL",
          "description": "GASOLINA",
          "amount": 50000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-1497",
          "date": "2026-05-24",
          "category": "Otros Gastos",
          "recipient": "PROVEEDOR GENERAL",
          "description": "COMPRA DE BOTAS DE DOTACION",
          "amount": 50000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-9003",
          "date": "2026-05-24",
          "category": "Combustible",
          "recipient": "PROVEEDOR GENERAL",
          "description": "GASOLINA MOTOBOMBA",
          "amount": 50000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-2209",
          "date": "2026-05-25",
          "category": "Otros Gastos",
          "recipient": "PROVEEDOR GENERAL",
          "description": "PERMISOS AUNAP",
          "amount": 419200,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-3110",
          "date": "2026-06-04",
          "category": "SERVICIOS PUBLICOS",
          "recipient": "PROVEEDOR GENERAL",
          "description": "INTERNET MES DE JUNIO",
          "amount": 60000,
          "paymentMethod": "Transferencia Bancaria"
        },
        {
          "id": "GAS-0241",
          "date": "2026-06-10",
          "category": "Otros Gastos",
          "recipient": "PROVEEDOR GENERAL",
          "description": "BOTAS DOTACION DAGER",
          "amount": 55000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-3991",
          "date": "2026-06-10",
          "category": "Otros Gastos",
          "recipient": "PROVEEDOR GENERAL",
          "description": "CABUYA",
          "amount": 7000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-8691",
          "date": "2026-06-20",
          "category": "Otros Gastos",
          "recipient": "PROVEEDOR GENERAL",
          "description": "VENENO COMEJEN",
          "amount": 28000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-6738",
          "date": "2026-06-20",
          "category": "Otros Gastos",
          "recipient": "PROVEEDOR GENERAL",
          "description": "CONSUMIBLES ESCOPETA",
          "amount": 57950,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-5417",
          "date": "2026-06-20",
          "category": "Energía Eléctrica",
          "recipient": "PROVEEDOR GENERAL",
          "description": "ELEMENTOS MATERIALES ELECTRICOS",
          "amount": 146200,
          "paymentMethod": "Efectivo",
          "receiptRef": "GAS-5417"
        },
        {
          "id": "GAS-9386",
          "date": "2026-06-20",
          "category": "Combustibles y Energía",
          "recipient": "PROVEEDOR GENERAL",
          "description": "GASOLINA",
          "amount": 127800,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-0836",
          "date": "2026-06-11",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "PEAJES",
          "amount": 25000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-0088",
          "date": "2026-06-11",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "TRANSPORTE ALEVINOS",
          "amount": 60000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-4273",
          "date": "2026-06-11",
          "category": "Combustibles y Energía",
          "recipient": "PROVEEDOR GENERAL",
          "description": "GASOLINA",
          "amount": 50000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-6510",
          "date": "2026-07-07",
          "category": "Energía Eléctrica",
          "recipient": "PROVEEDOR GENERAL",
          "description": "MATERIALES ELECTRICOS",
          "amount": 20000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-7393",
          "date": "2026-07-09",
          "category": "Mantenimiento y Adecuaciones",
          "recipient": "PROVEEDOR GENERAL",
          "description": "ARREGLO SPLASH Y ARREGLO BLOWER",
          "amount": 1000000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-2450",
          "date": "2026-07-10",
          "category": "Otros Gastos",
          "recipient": "PROVEEDOR GENERAL",
          "description": "VENENO Y JERINGA",
          "amount": 26600,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-4473",
          "date": "2026-07-14",
          "category": "Energía Eléctrica",
          "recipient": "PROVEEDOR GENERAL",
          "description": "ARREGLO ELECTRICO",
          "amount": 50000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-2299",
          "date": "2026-08-01",
          "category": "SERVICIOS PUBLICOS",
          "recipient": "INTERNET",
          "description": "INTERNET AGOSTO",
          "amount": 60000,
          "paymentMethod": "Transferencia Bancaria"
        },
        {
          "id": "GAS-7347",
          "date": "2026-08-04",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "GASOLINA",
          "amount": 93000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-8579",
          "date": "2026-10-22",
          "category": "Combustibles y Energía",
          "recipient": "PROVEEDOR GENERAL",
          "description": "GASOLINA",
          "amount": 117000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-4130",
          "date": "2026-10-22",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "PEAJES",
          "amount": 50000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-9947",
          "date": "2026-10-29",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "MOTOCARRO ENVIO MOJARRA 25",
          "amount": 25000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-0277",
          "date": "2026-11-06",
          "category": "Mantenimiento y Adecuaciones",
          "recipient": "Javier Rivera Armenta",
          "description": "MANTENIMIENTO BOMBA SUMERGIBLE",
          "amount": 350000,
          "paymentMethod": "Transferencia Bancaria"
        },
        {
          "id": "GAS-1024",
          "date": "2026-11-13",
          "category": "Otros Gastos",
          "recipient": "SIIGO S.A.",
          "description": "PAGO SOFTWARE CONTABILIDAD",
          "amount": 149535,
          "paymentMethod": "Transferencia Bancaria"
        },
        {
          "id": "GAS-4724",
          "date": "2026-08-11",
          "category": "Otros Gastos",
          "recipient": "General",
          "description": "LAVADO CARRO",
          "amount": 30000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-3597",
          "date": "2026-08-13",
          "category": "Otros Gastos",
          "recipient": "PROVEEDOR GENERAL",
          "description": "ADECUACION CERCAS POR INVASION TERRENO",
          "amount": 800000,
          "paymentMethod": "Efectivo",
          "receiptRef": "GAS-3597"
        },
        {
          "id": "GAS-0207",
          "date": "2026-08-13",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "TRANSPORTE MEDICAMENTOS",
          "amount": 20000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-0694",
          "date": "2026-08-23",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "PEAJES",
          "amount": 25000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-7312",
          "date": "2026-08-24",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "TRANSPORTE MEDICAMENTO",
          "amount": 17500,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-5685",
          "date": "2026-08-31",
          "category": "Mantenimiento y Adecuaciones",
          "recipient": "PROVEEDOR GENERAL",
          "description": "COMPRA DE ROLLO POLISOMBRA",
          "amount": 500000,
          "paymentMethod": "Transferencia Bancaria"
        },
        {
          "id": "GAS-1785",
          "date": "2026-08-31",
          "category": "Transporte y Fletes",
          "recipient": "PROVEEDOR GENERAL",
          "description": "GASOLINA",
          "amount": 153000,
          "paymentMethod": "Efectivo"
        },
        {
          "id": "GAS-3706",
          "date": "2026-10-10",
          "category": "Otros Gastos",
          "recipient": "PROVEEDOR GENERAL",
          "description": "ABONO PROCESO AFINIA",
          "amount": 400000,
          "paymentMethod": "Transferencia Bancaria"
        }
      ],
      "employees": [
        {
          "id": "EMP-1781",
          "name": "ARGEMIRO",
          "document": "0",
          "phone": "0",
          "role": "Administrador / Zootecnista",
          "hireDate": "2024-10-21",
          "salary": 2000000,
          "baseSalary": 2000000,
          "bankInfo": "Efectivo / Por convenir",
          "status": "activo",
          "createdAt": "2026-10-21"
        },
        {
          "id": "EMP-1641",
          "name": "DAGER RODRIGUEZ",
          "document": "0",
          "phone": "0",
          "role": "Administrador / Zootecnista",
          "hireDate": "2026-11-07",
          "salary": 2000000,
          "baseSalary": 2000000,
          "bankInfo": "Efectivo / Por convenir",
          "status": "activo",
          "createdAt": "2026-11-07"
        },
        {
          "id": "EMP-4809",
          "name": "GILFREDO RODRIGUEZ",
          "document": "0",
          "phone": "0",
          "role": "Técnico Piscícola y Sanidad",
          "hireDate": "2026-11-07",
          "salary": 2000000,
          "baseSalary": 2000000,
          "bankInfo": "Efectivo / Por convenir",
          "status": "activo",
          "createdAt": "2026-11-07"
        },
        {
          "id": "EMP-8805",
          "name": "NEFTALINA PEREZ",
          "document": "0",
          "phone": "0",
          "role": "Operario de Campo y Alimentación (Estanques 1 al 5)",
          "hireDate": "2026-11-07",
          "salary": 200000,
          "baseSalary": 200000,
          "bankInfo": "Efectivo / Por convenir",
          "status": "activo",
          "createdAt": "2026-11-07"
        }
      ],
      "payrollPayments": [
        {
          "id": "PAY-438495",
          "employeeId": "EMP-1781",
          "date": "2026-10-10",
          "period": "ABONO PAGO SEPTIEMBRE",
          "baseSalary": 400000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 400000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-759016",
          "employeeId": "EMP-1641",
          "date": "2026-05-24",
          "period": "QUINCENA 2 DE MAYO",
          "baseSalary": 500000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 500000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-783689",
          "employeeId": "EMP-4809",
          "date": "2026-05-24",
          "period": "QUINCENA 2 DE MAYO",
          "baseSalary": 300000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 300000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-808908",
          "employeeId": "EMP-8805",
          "date": "2026-05-24",
          "period": "BONIFICACION COSECHA",
          "baseSalary": 30000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 30000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-461566",
          "employeeId": "EMP-1641",
          "date": "2026-06-11",
          "period": "QUINCENA 01 JUNIO",
          "baseSalary": 500000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 500000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-481051",
          "employeeId": "EMP-4809",
          "date": "2026-06-11",
          "period": "QUINCENA 01 JUNIO",
          "baseSalary": 300000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 300000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-683290",
          "employeeId": "EMP-8805",
          "date": "2026-06-11",
          "period": "BONIFICACION COSECHA",
          "baseSalary": 50000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 50000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-066438",
          "employeeId": "EMP-1641",
          "date": "2026-06-30",
          "period": "QUINCENA 2 JUNIO + PRIMA",
          "baseSalary": 1000000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 1000000,
          "paymentMethod": "Transferencia Bancolombia"
        },
        {
          "id": "PAY-083340",
          "employeeId": "EMP-4809",
          "date": "2026-06-30",
          "period": "QUINCENA 2 JUNIO + PRIMA",
          "baseSalary": 600000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 600000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-103819",
          "employeeId": "EMP-1641",
          "date": "2026-06-30",
          "period": "PAGO VACACIONES",
          "baseSalary": 500000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 500000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-557078",
          "employeeId": "EMP-4809",
          "date": "2026-07-31",
          "period": "QUINCENA 2 JULIO",
          "baseSalary": 300000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 300000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-884954",
          "employeeId": "EMP-1641",
          "date": "2026-08-15",
          "period": "primera Quincena Agosto 2026",
          "baseSalary": 500000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 500000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-912628",
          "employeeId": "EMP-4809",
          "date": "2026-08-15",
          "period": "Primera Quincena Agosto 2026",
          "baseSalary": 300000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 300000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-940540",
          "employeeId": "EMP-1641",
          "date": "2026-08-31",
          "period": "Segunda Quincena Agosto 2026",
          "baseSalary": 500000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 500000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-955565",
          "employeeId": "EMP-4809",
          "date": "2026-08-31",
          "period": "Segunda Quincena Agosto 2026",
          "baseSalary": 300000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 300000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-004488",
          "employeeId": "EMP-1641",
          "date": "2026-09-15",
          "period": "Primera Quincena Septiembre 2026",
          "baseSalary": 500000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 500000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-030677",
          "employeeId": "EMP-4809",
          "date": "2026-09-15",
          "period": "Primera Quincena Septiembre 2026",
          "baseSalary": 300000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 300000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-136081",
          "employeeId": "EMP-1641",
          "date": "2026-09-30",
          "period": "Segunda Quincena Septiembre 2026",
          "baseSalary": 500000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 500000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-148089",
          "employeeId": "EMP-4809",
          "date": "2026-09-30",
          "period": "Segunda Quincena Septiembre 2026",
          "baseSalary": 300000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 300000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-206255",
          "employeeId": "EMP-1641",
          "date": "2026-10-15",
          "period": "Primera Quincena Octubre 2026",
          "baseSalary": 500000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 500000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-227881",
          "employeeId": "EMP-4809",
          "date": "2026-10-15",
          "period": "Primera Quincena Octubre 2026",
          "baseSalary": 300000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 300000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-245370",
          "employeeId": "EMP-1641",
          "date": "2026-10-31",
          "period": "Segunda Quincena Octubre 2026",
          "baseSalary": 500000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 500000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-259725",
          "employeeId": "EMP-4809",
          "date": "2026-10-31",
          "period": "Segunda Quincena Octubre 2026",
          "baseSalary": 300000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 300000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-281065",
          "employeeId": "EMP-1641",
          "date": "2026-11-15",
          "period": "Primera Quincena Noviembre 2026",
          "baseSalary": 500000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 500000,
          "paymentMethod": "Efectivo en Granja"
        },
        {
          "id": "PAY-298413",
          "employeeId": "EMP-4809",
          "date": "2026-11-15",
          "period": "Primera Quincena Noviembre 2026",
          "baseSalary": 300000,
          "bonuses": 0,
          "deductions": 0,
          "netPaid": 300000,
          "paymentMethod": "Efectivo en Granja"
        }
      ],
      "transfers": [],
      "harvests": [],
      "sales": [],
      "suppliers": [
        {
          "id": "SUPP-9202",
          "name": "AGROFUTURO EL PASO",
          "nit": "0",
          "category": "Alimento Concentrado",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "0",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-10-17"
        },
        {
          "id": "SUPP-5826",
          "name": "ANDRES CUBILLOS HERRERA",
          "nit": "0",
          "category": "Alevinos y Genética",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "Colombia",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-10-18"
        },
        {
          "id": "SUPP-2525",
          "name": "AGROPECUARIA EL CAMPO",
          "nit": "0",
          "category": "Alimento Concentrado",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "Colombia",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-10-18"
        },
        {
          "id": "SUPP-7945",
          "name": "PROVEEDOR GENERAL",
          "nit": "0",
          "category": "Alimento Concentrado",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "0",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-10-18"
        },
        {
          "id": "SUPP-3134",
          "name": "AGROMATERIALES PORCIPOLLOS",
          "nit": "0",
          "category": "Alimento Concentrado",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "0",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-10-21"
        },
        {
          "id": "SUPP-7382",
          "name": "AGROCAM",
          "nit": "901083522",
          "category": "Alimento Concentrado",
          "contact": "AGROCAM",
          "phone": "3182320679",
          "whatsapp": "3182320679",
          "email": "0@0",
          "city": "LA LOMA CESAR",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-10-21"
        },
        {
          "id": "SUPP-2829",
          "name": "AGROPAISA",
          "nit": "900345431",
          "category": "Alimento Concentrado",
          "contact": "AGROPAISA",
          "phone": "6378080",
          "whatsapp": "6378080",
          "email": "0@0",
          "city": "BUCARAMANGA",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-10-21"
        },
        {
          "id": "SUPP-9193",
          "name": "FINCA EL DIAMANTE",
          "nit": "0",
          "category": "Alevinos y Genética",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "Colombia",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-11-07"
        },
        {
          "id": "SUPP-1342",
          "name": "TECNOAQUA SAS",
          "nit": "0",
          "category": "Medicamentos y Químicos",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "Colombia",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-11-07"
        },
        {
          "id": "SUPP-6227",
          "name": "ASIA ACUICULTURA",
          "nit": "0",
          "category": "Medicamentos y Químicos",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "0",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-11-07"
        },
        {
          "id": "SUPP-8467",
          "name": "CAMPOVALLENATO",
          "nit": "0",
          "category": "Alimento Concentrado",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "Colombia",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-11-07"
        },
        {
          "id": "SUPP-3797",
          "name": "JAVIER RIVERA",
          "nit": "0",
          "category": "Mantenimiento y Obra",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "Colombia",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-11-15"
        },
        {
          "id": "SUPP-6134",
          "name": "SIIGO S.A.",
          "nit": "0",
          "category": "Mantenimiento y Obra",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "Colombia",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-11-15"
        },
        {
          "id": "SUPP-1801",
          "name": "MONTEGRAL EL PASO",
          "nit": "0",
          "category": "Alimento Concentrado",
          "contact": "0",
          "phone": "0",
          "whatsapp": "0",
          "email": "0@0",
          "city": "Colombia",
          "paymentTerms": "Contado",
          "notes": "",
          "status": "activo",
          "createdAt": "2026-11-19"
        }
      ],
      "clients": [],
      "equipment": [],
      "maintenanceLogs": [],
      "waterQuality": []
    }
  }
};

// Generate clean, blank units for a new company (ponds + geomembranes in 'descanso' status with blank physical dimensions)
function generateBlankUnits(earthenCount = 10, geosCount = 3) {
  const units = [];
  const pCount = Math.max(1, parseInt(earthenCount, 10) || 10);
  const gCount = Math.max(0, parseInt(geosCount, 10) || 3);

  for (let i = 0; i < pCount; i++) {
    const idNum = (i + 1).toString().padStart(2, '0');
    units.push({
      id: `E-${idNum}`,
      type: "estanque",
      name: `Estanque ${i}`,
      areaM2: 0,
      avgDepthM: 0,
      volumeM3: 0,
      soilType: "Arcilloso",
      aeration: "Paletas / Splash",
      activeBatchId: null,
      status: "descanso"
    });
  }

  for (let j = 1; j <= gCount; j++) {
    const num = j.toString().padStart(2, '0');
    units.push({
      id: `G-${num}`,
      type: "geomembrana",
      name: `Geomembrana ${j}`,
      diameterM: 0,
      areaM2: 0,
      avgDepthM: 0,
      volumeM3: 0,
      liner: "HDPE 1.0mm",
      aeration: "Blower + Difusores",
      activeBatchId: null,
      status: "descanso"
    });
  }
  return units;
}

// Central Registry of Per-Company Modules and Global System Keys
const DATA_SCHEMA_VERSION = 450;
const COMPANY_COLLECTION_MODULES = [
  'units',
  'batches',
  'feedings',
  'biometries',
  'densityRecords',
  'medications',
  'purchases',
  'inventory',
  'inventoryMovements',
  'expenses',
  'employees',
  'payrollPayments',
  'transfers',
  'harvests',
  'sales',
  'suppliers',
  'clients',
  'equipment',
  'maintenanceLogs',
  'waterQuality'
];
const GLOBAL_SYSTEM_KEYS = [
  'users',
  'companies',
  'activeCompanyId',
  'speciesCatalog',
  'aspirationSystemsCatalog',
  'categoriesCatalog',
  'brandsCatalog',
  'companyStores',
  '_schemaVersion',
  '_appVersion',
  'lastSavedAt'
];

// Storage Management Helper Functions
class PiscicolaStorage {
  // ==================== BLINDAJE DE DATOS MULTI-EMPRESA ====================
  static getCompanyStorageKey(companyId) {
    const prefix = (typeof window !== 'undefined' && window.IS_STAGING_ENV)
      ? 'PISCICOLA_STAGING_COMPANY_DATA_'
      : 'PISCICOLA_COMPANY_DATA_';
    return `${prefix}${companyId || 'EMP-004'}`;
  }

  static getBackupStorageKey(companyId, slot = 'LATEST') {
    const prefix = (typeof window !== 'undefined' && window.IS_STAGING_ENV)
      ? 'PISCICOLA_STAGING_BACKUP_'
      : 'PISCICOLA_BACKUP_';
    return `${prefix}${companyId || 'EMP-004'}_${slot}`;
  }

  static countStoreEntities(store) {
    if (!store || typeof store !== 'object') return 0;
    return (Array.isArray(store.purchases) ? store.purchases.length : 0) +
           (Array.isArray(store.expenses) ? store.expenses.length : 0) +
           (Array.isArray(store.batches) ? store.batches.length : 0) +
           (Array.isArray(store.biometries) ? store.biometries.length : 0) +
           (Array.isArray(store.inventory) ? store.inventory.length : 0) +
           (Array.isArray(store.employees) ? store.employees.length : 0) +
           (Array.isArray(store.payrollPayments) ? store.payrollPayments.length : 0) +
           (Array.isArray(store.sales) ? store.sales.length : 0) +
           (Array.isArray(store.harvests) ? store.harvests.length : 0) +
           (Array.isArray(store.suppliers) ? store.suppliers.length : 0) +
           (Array.isArray(store.feedings) ? store.feedings.length : 0);
  }

  static normalizePondAndGeoNames(unitsList) {
    if (!Array.isArray(unitsList)) return;
    unitsList.forEach(u => {
      if (u.type === 'estanque') {
        const match = (u.id || '').match(/^E-0?(\d+)$/);
        if (match) {
          const idx = parseInt(match[1], 10) - 1;
          if (idx >= 0 && idx <= 9) {
            u.name = `Estanque ${idx}`;
          }
        }
      } else if (u.type === 'geomembrana') {
        const match = (u.id || '').match(/^G-0?(\d+)$/);
        if (match) {
          const idx = parseInt(match[1], 10);
          if (idx >= 1 && idx <= 3) {
            u.name = `Geomembrana ${idx}`;
          }
        }
      }
    });
  }
  // =========================================================================

  static isServerMode() {
    return (typeof window !== 'undefined' && window.location && window.location.protocol.startsWith('http'));
  }

  static getCompanyModuleKeys() {
    return [...COMPANY_COLLECTION_MODULES];
  }

  // Crea una estructura de empresa completamente limpia y aislada con todos los módulos conocidos
  static createBlankCompanyStore(companyMeta) {
    const meta = companyMeta || {};
    const store = {
      farmInfo: {
        name: meta.name || "Mi Piscícola",
        nit: meta.nit || "",
        location: meta.location || "",
        technicalManager: meta.technicalManager || "Ing. Carlos Mendoza (DC Asesorías)",
        currency: "COP ($)",
        lastUpdate: new Date().toISOString()
      },
      units: generateBlankUnits(meta.earthenPondsCount || 10, meta.geomembranesCount || 3)
    };

    COMPANY_COLLECTION_MODULES.forEach(modKey => {
      if (modKey !== 'units') {
        store[modKey] = [];
      }
    });

    return store;
  }

  // Hidratación No-Destructiva: Asegura que todo módulo nuevo exista sin alterar ni borrar datos ya existentes
  static safeHydrateCompanyStore(store, companyMeta = null) {
    if (!store || typeof store !== 'object') {
      return this.createBlankCompanyStore(companyMeta);
    }

    if (!store.farmInfo) {
      const meta = companyMeta || {};
      store.farmInfo = {
        name: meta.name || "Mi Piscícola",
        nit: meta.nit || "",
        location: meta.location || "",
        technicalManager: meta.technicalManager || "Ing. Carlos Mendoza (DC Asesorías)",
        currency: "COP ($)",
        lastUpdate: new Date().toISOString()
      };
    }

    if (!Array.isArray(store.units) || store.units.length === 0) {
      const ponds = companyMeta ? (companyMeta.earthenPondsCount || 10) : 10;
      const geos = companyMeta ? (companyMeta.geomembranesCount || 3) : 3;
      store.units = generateBlankUnits(ponds, geos);
    }

    // Regla de Oro: Solo inicializar si es estrictamente undefined.
    // NUNCA sobreescribir si ya existe un array, aunque tenga 0 elementos.
    COMPANY_COLLECTION_MODULES.forEach(modKey => {
      if (modKey !== 'units' && store[modKey] === undefined) {
        store[modKey] = [];
      }
    });

    return store;
  }

  // Instantánea de Seguridad Automática Previa a cualquier actualización o migración
  static takeAutoSnapshot(rawJson, oldVersion) {
    try {
      if (typeof localStorage === 'undefined' || !rawJson) return;
      const nowIso = new Date().toISOString().replace(/[:.]/g, '-');
      const snapshotKey = `PISCICOLA_AUTO_SNAPSHOT_v${oldVersion || 'legacy'}_${nowIso}`;

      // Guardar copia exacta antes de cambios
      localStorage.setItem(snapshotKey, rawJson);
      console.log(`🛡️ [DC PISCÍCOLA] Instantánea de seguridad automática guardada: ${snapshotKey}`);

      // Mantener rotación de máximo 4 instantáneas para proteger la cuota de memoria
      const snapshotKeys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('PISCICOLA_AUTO_SNAPSHOT_')) {
          snapshotKeys.push(k);
        }
      }
      snapshotKeys.sort();
      while (snapshotKeys.length > 4) {
        const oldest = snapshotKeys.shift();
        localStorage.removeItem(oldest);
        console.log(`🧹 [DC PISCÍCOLA] Instantánea antigua purgada para liberar espacio: ${oldest}`);
      }
    } catch (err) {
      console.warn('⚠️ No fue posible registrar la instantánea automática:', err);
    }
  }

  // Lista de instantáneas disponibles para auditoría o recuperación
  static listSnapshots() {
    if (typeof localStorage === 'undefined') return [];
    const list = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && (k.startsWith('PISCICOLA_AUTO_SNAPSHOT_') || k.startsWith('PISCICOLA_BACKUP_') || k.startsWith('PISCICOLA_PRE_SYNC_'))) {
        list.push(k);
      }
    }
    return list.sort().reverse();
  }

  // Restauración de emergencia desde una instantánea (conectada al motor de importación blindado)
  static async restoreSnapshot(snapshotKey) {
    if (typeof localStorage === 'undefined') return false;
    const raw = localStorage.getItem(snapshotKey);
    if (!raw) return false;
    return await this.importJSON(raw);
  }

  // Motor de Migraciones Incrementales y No-Destructivas
  static runSchemaMigrations(data) {
    if (!data || typeof data !== 'object') return data;
    const currentVer = data._schemaVersion || 0;

    // Migración hacia v450 si viene de versión anterior
    if (currentVer < 450) {
      console.log(`🚀 [DC PISCÍCOLA] Ejecutando migración de esquema hacia v450 (versión detectada: ${currentVer})...`);
      
      // Asegurar que waterQuality esté presente en todos los almacenes de empresa
      if (data.companyStores && typeof data.companyStores === 'object') {
        Object.keys(data.companyStores).forEach(compId => {
          const store = data.companyStores[compId];
          if (store && store.waterQuality === undefined) {
            store.waterQuality = (compId === 'EMP-001' && Array.isArray(DEFAULT_DATA.waterQuality))
              ? JSON.parse(JSON.stringify(DEFAULT_DATA.waterQuality))
              : [];
          }
        });
      }

      data._schemaVersion = 450;
      data._appVersion = APP_CONFIG.version;
    }

    return data;
  }

  static get() {
    try {
      const raw = (typeof localStorage !== 'undefined') ? localStorage.getItem(STORAGE_KEY) : null;
      let data;
      if (!raw) {
        data = JSON.parse(JSON.stringify(DEFAULT_DATA));
      } else {
        data = JSON.parse(raw);

        // Si se detecta un cambio de versión de esquema, tomar instantánea de seguridad primero
        const detectedVer = data._schemaVersion || 0;
        if (detectedVer < DATA_SCHEMA_VERSION) {
          this.takeAutoSnapshot(raw, detectedVer);
        }
      }

      // Aplicar migraciones no destructivas
      data = this.runSchemaMigrations(data);

      // Initialize companyStores dictionary
      if (!data.companyStores || typeof data.companyStores !== 'object') {
        data.companyStores = {};
      }

      // Purga automática de empresas de demostración eliminadas
      const demoCompanyIds = ['EMP-001', 'EMP-002', 'EMP-003'];
      if (Array.isArray(data.companies)) {
        data.companies = data.companies.filter(c => !demoCompanyIds.includes(c.id));
      }
      if (data.companyStores && typeof data.companyStores === 'object') {
        demoCompanyIds.forEach(id => delete data.companyStores[id]);
      }

      // Garantizar que la empresa EMP-004 esté siempre registrada como activa
      if (!Array.isArray(data.companies) || data.companies.length === 0 || !data.companies.some(c => c.id === 'EMP-004')) {
        data.companies = JSON.parse(JSON.stringify(DEFAULT_DATA.companies));
      }
      data.activeCompanyId = 'EMP-004';

      // Initialize companyStores dictionary
      if (!data.companyStores || typeof data.companyStores !== 'object') {
        data.companyStores = {};
      }

      // ==================== BLINDAJE CAPA 1: CARGA AISLADA POR EMPRESA ====================
      // 1. Revisar si existe almacenamiento segregado independiente para EMP-004
      if (typeof localStorage !== 'undefined') {
        try {
          const compKey = this.getCompanyStorageKey('EMP-004');
          const compRaw = localStorage.getItem(compKey);
          if (compRaw) {
            const parsedComp = JSON.parse(compRaw);
            if (parsedComp && typeof parsedComp === 'object') {
              const localCompScore = this.countStoreEntities(data.companyStores['EMP-004']);
              const isolatedScore = this.countStoreEntities(parsedComp);
              if (isolatedScore >= localCompScore) {
                data.companyStores['EMP-004'] = parsedComp;
              }
            }
          }
        } catch (e) {
          console.warn('🛡️ [BLINDAJE] Error verificando clave segregada de empresa:', e);
        }
      }

      // 2. RECUPERACIÓN OBLIGATORIA DE EL PASITO (EMP-004): Si no existe o tiene arrays vacíos, restaurar inmediatamente
      const defaultEmp004Store = DEFAULT_DATA.companyStores && DEFAULT_DATA.companyStores['EMP-004'];
      if (defaultEmp004Store) {
        const curStore = data.companyStores['EMP-004'];
        const needsRecovery = !curStore || this.countStoreEntities(curStore) === 0;

        if (needsRecovery) {
          console.log('🛡️ [DC PISCÍCOLA] Restaurando datos operativos de El Pasito (EMP-004)...');
          data.companyStores['EMP-004'] = JSON.parse(JSON.stringify(defaultEmp004Store));
        } else {
          this.safeHydrateCompanyStore(data.companyStores['EMP-004'], data.companies.find(c => c.id === 'EMP-004'));
        }
      }

      // 3. Normalizar nombres de estanques (Estanque 0 a 9) y geomembranas (Geomembrana 1 a 3) respetando medidas
      if (data.companyStores['EMP-004'] && data.companyStores['EMP-004'].units) {
        this.normalizePondAndGeoNames(data.companyStores['EMP-004'].units);
      }
      if (data.units) {
        this.normalizePondAndGeoNames(data.units);
      }

      // Ensure any other registered company has an isolated store
      if (Array.isArray(data.companies)) {
        data.companies.forEach(c => {
          if (c.id !== 'EMP-004') {
            if (!data.companyStores[c.id]) {
              data.companyStores[c.id] = this.createBlankCompanyStore(c);
            } else {
              this.safeHydrateCompanyStore(data.companyStores[c.id], c);
            }
          }
        });
// Ensure all companies have contract and billing info
        data.companies.forEach(c => {
          if (!c.contract) {
            const defaultMatch = DEFAULT_DATA.companies.find(dc => dc.id === c.id);
            if (defaultMatch && defaultMatch.contract) {
              c.contract = JSON.parse(JSON.stringify(defaultMatch.contract));
              c.billingPayments = JSON.parse(JSON.stringify(defaultMatch.billingPayments || []));
            } else {
              c.contract = {
                planName: "Asesoría Técnica Zootécnica",
                billingCycle: "mensual",
                feeAmount: 2000000,
                startDate: c.createdAt || "2024-01-01",
                billingDay: 5,
                nextBillingDate: new Date(Date.now() + 15 * 86400000).toISOString().slice(0, 10),
                status: c.status === 'activo' ? 'al_dia' : 'finalizado',
                notes: ""
              };
              c.billingPayments = [];
            }
          }
        });

        // Ensure all companies have userRole and assignedUsers
        data.companies.forEach(c => {
          if (!c.userRole) {
            const defaultMatch = DEFAULT_DATA.companies.find(dc => dc.id === c.id);
            c.userRole = (defaultMatch && defaultMatch.userRole) ? defaultMatch.userRole : 'lite';
          }
          if (!Array.isArray(c.assignedUsers) || c.assignedUsers.length === 0) {
            const defaultMatch = DEFAULT_DATA.companies.find(dc => dc.id === c.id);
            if (defaultMatch && defaultMatch.assignedUsers) {
              c.assignedUsers = JSON.parse(JSON.stringify(defaultMatch.assignedUsers));
            } else if (c.userRole === 'both') {
              c.assignedUsers = [
                { id: `USR-${c.id}-M`, email: c.clientEmail, name: `${c.clientName || c.name} (Admin)`, role: 'master', password: '123456', companyId: c.id },
                { id: `USR-${c.id}-L`, email: c.clientEmail, name: `${c.clientName || c.name} (Lite)`, role: 'lite', password: '123456', companyId: c.id }
              ];
            } else {
              c.assignedUsers = [
                { id: `USR-${c.id}-1`, email: c.clientEmail, name: c.clientName || c.name, role: c.userRole || 'lite', password: '123456', companyId: c.id }
              ];
            }
          }
        });
      }

      // Ensure root users exist safely
      if (!Array.isArray(data.users) || data.users.length === 0) {
        data.users = JSON.parse(JSON.stringify(DEFAULT_DATA.users));
      }

      // Sincronizar dinámicamente la empresa activa con el almacén correspondiente
      const targetCompanyId = data.activeCompanyId || 'EMP-004';
      data.activeCompanyId = targetCompanyId;
      const targetStore = data.companyStores[targetCompanyId] || (DEFAULT_DATA.companyStores && DEFAULT_DATA.companyStores['EMP-004']);
      if (targetStore) {
        if (targetStore.farmInfo) data.farmInfo = JSON.parse(JSON.stringify(targetStore.farmInfo));
        COMPANY_COLLECTION_MODULES.forEach(mod => {
          if (targetStore[mod] !== undefined && Array.isArray(targetStore[mod]) && targetStore[mod].length > 0) {
            data[mod] = JSON.parse(JSON.stringify(targetStore[mod]));
          } else if (!Array.isArray(data[mod]) || data[mod].length === 0) {
            data[mod] = targetStore[mod] ? JSON.parse(JSON.stringify(targetStore[mod])) : [];
          }
        });
      }

      // Guardar inmediatamente la restauración en el almacenamiento local para persistencia
      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {}
      }

      // Ensure global catalogs exist
      if (!Array.isArray(data.speciesCatalog) || data.speciesCatalog.length === 0) {
        data.speciesCatalog = JSON.parse(JSON.stringify(DEFAULT_DATA.speciesCatalog || []));
      }
      if (!Array.isArray(data.aspirationSystemsCatalog) || data.aspirationSystemsCatalog.length === 0) {
        data.aspirationSystemsCatalog = JSON.parse(JSON.stringify(DEFAULT_DATA.aspirationSystemsCatalog || []));
      }
      if (!Array.isArray(data.categoriesCatalog) || data.categoriesCatalog.length === 0) {
        data.categoriesCatalog = JSON.parse(JSON.stringify(DEFAULT_DATA.categoriesCatalog || []));
      } else {
        // Hydrate default expense categories if they do not exist yet in categoriesCatalog
        const defaultExpenseCats = [
          { name: "Energía Eléctrica", module: "gastos", description: "Consumo de energía para bombeo, aireación continua 24/7 y transformador", icon: "fa-bolt", color: "indigo" },
          { name: "Combustible", module: "gastos", description: "ACPM (Diésel) para plantas eléctricas y gasolina para motobombas", icon: "fa-gas-pump", color: "amber" },
          { name: "Mantenimiento y Adecuaciones", module: "gastos", description: "Repuestos, soldadura, tuberías PVC, geomembrana y adecuación de estanques", icon: "fa-screwdriver-wrench", color: "orange" },
          { name: "Servicios y Asesoría Técnica", module: "gastos", description: "Análisis de laboratorio de agua ICA, asesoría técnica zootécnica y veterinaria", icon: "fa-handshake", color: "sky" },
          { name: "Transporte y Fletes", module: "gastos", description: "Flete terrestre y acarreos de concentrado, insumos y despachos", icon: "fa-truck", color: "cyan" },
          { name: "Otros Gastos", module: "gastos", description: "Gastos operativos varios, imprevistos y servicios menores", icon: "fa-receipt", color: "slate" }
        ];
        defaultExpenseCats.forEach(defCat => {
          const exists = data.categoriesCatalog.some(c => 
            (c.name || '').toLowerCase().trim() === defCat.name.toLowerCase().trim()
          );
          if (!exists) {
            data.categoriesCatalog.push({
              id: "CAT-" + Date.now().toString().slice(-4) + Math.floor(Math.random() * 1000),
              ...defCat
            });
          }
        });
      }
      if (!Array.isArray(data.brandsCatalog) || data.brandsCatalog.length === 0) {
        data.brandsCatalog = JSON.parse(JSON.stringify(DEFAULT_DATA.brandsCatalog || []));
      }

      // Normalizar datos de inventario y limpiar marcas incompatibles de alevinos
      const sanitizeInventoryList = (items) => {
        if (!Array.isArray(items)) return;
        items.forEach(item => {
          const isFeed = item.category === 'alimento' || (item.category && item.category.toLowerCase().includes('alimento'));
          const isAlevino = (item.category && (item.category.toLowerCase().includes('alevin') || item.category.toLowerCase().includes('genética') || item.category.toLowerCase().includes('genetica'))) ||
                            (item.name && item.name.toLowerCase().includes('alevin'));
          if (item.currentStockKg == null && item.currentStock != null) item.currentStockKg = isFeed ? item.currentStock : 0;
          if (item.currentStock == null && item.currentStockKg != null) item.currentStock = item.currentStockKg;
          if (item.minStockKg == null && item.minStock != null) item.minStockKg = isFeed ? item.minStock : 0;
          if (item.minStock == null && item.minStockKg != null) item.minStock = item.minStockKg;
          if (item.costPerKg == null && item.costPerUnit != null) item.costPerKg = isFeed ? item.costPerUnit : 0;
          if (item.costPerUnit == null && item.costPerKg != null) item.costPerUnit = item.costPerKg;

          // Los alevinos no deben llevar marca comercial de alimento concentrado (como Italcol)
          if (isAlevino) {
            const b = (item.brand || '').toLowerCase().trim();
            if (!item.brand || b.includes('italcol') || b.includes('solla') || b.includes('finca') || b === 'general') {
              item.brand = item.hatchery || item.origin || (item.supplier && !item.supplier.toLowerCase().includes('italcol') && !item.supplier.toLowerCase().includes('solla') && !item.supplier.toLowerCase().includes('finca') ? item.supplier : 'Criadero Certificado');
            }
            if (item.supplier && item.supplier.toLowerCase().includes('italcol')) {
              item.supplier = 'Criadero Certificado';
            }
          }
        });
      };

      if (data.inventory) sanitizeInventoryList(data.inventory);
      if (data.companyStores && typeof data.companyStores === 'object') {
        Object.values(data.companyStores).forEach(cs => {
          if (cs && cs.inventory) sanitizeInventoryList(cs.inventory);
        });
      }

      // Asegurar que cada insumo en inventario tenga al menos su movimiento inicial en kardex
      const ensureKardexCoverage = (inventory, movements) => {
        if (!Array.isArray(inventory) || !Array.isArray(movements)) return;
        inventory.forEach(item => {
          const itemNameClean = (item.name || '').toLowerCase().trim();
          const hasMov = movements.some(m =>
            (m.itemId && m.itemId === item.id) ||
            ((m.itemName || '').toLowerCase().trim() === itemNameClean)
          );
          if (!hasMov) {
            const isFeed = item.category === 'alimento' || (item.category && item.category.toLowerCase().includes('alimento'));
            const isAlevino = (item.category && (item.category.toLowerCase().includes('alevin') || item.category.toLowerCase().includes('genética'))) || itemNameClean.includes('alevin');
            const stock = isFeed ? (item.currentStockKg != null ? item.currentStockKg : item.currentStock || 0) : (item.currentStock != null ? item.currentStock : item.currentStockKg || 0);
            const cost = isFeed ? (item.costPerKg || item.costPerUnit || 0) : (item.costPerUnit || item.costPerKg || 0);
            const unit = isFeed ? (item.unit || 'kg') : (item.unit || (isAlevino ? 'unidades' : 'und'));
            let initialDate = item.lastPurchaseDate || '2026-09-01';

            movements.push({
              id: `MOV-INI-${item.id || Date.now()}-${Math.floor(Math.random() * 1000)}`,
              date: initialDate,
              type: 'entrada',
              category: item.category || (isFeed ? 'Alimento Concentrado' : isAlevino ? 'Alevinos y Genética' : 'Insumos Varios'),
              itemId: item.id,
              itemName: item.name,
              quantity: stock,
              unit: unit,
              unitCost: cost,
              totalCost: Math.round(stock * cost),
              reference: 'Inventario Inicial / Saldo de Apertura',
              destination: item.location || 'Bodega Principal',
              balanceAfter: stock,
              notes: `Saldo inicial registrado en catálogo de bodega: ${stock} ${unit}`
            });
          }
        });
      };

      if (data.inventory) {
        if (!data.inventoryMovements) data.inventoryMovements = [];
        ensureKardexCoverage(data.inventory, data.inventoryMovements);
      }
      if (data.companyStores && typeof data.companyStores === 'object') {
        Object.values(data.companyStores).forEach(cs => {
          if (cs && cs.inventory) {
            if (!cs.inventoryMovements) cs.inventoryMovements = [];
            ensureKardexCoverage(cs.inventory, cs.inventoryMovements);
          }
        });
      }

      data._schemaVersion = DATA_SCHEMA_VERSION;
      data._appVersion = APP_CONFIG.version;

      return data;
    } catch (e) {
      console.error("Error leyendo datos de almacenamiento, preservando datos existentes:", e);
      // Intentar recuperar de la última instantánea disponible si el JSON fue corrompido
      const snapshots = this.listSnapshots();
      if (snapshots.length > 0) {
        console.warn(`🔄 Intentando recuperación desde última instantánea: ${snapshots[0]}`);
        const snapRaw = localStorage.getItem(snapshots[0]);
        if (snapRaw) {
          try {
            return JSON.parse(snapRaw);
          } catch (e2) {}
        }
      }
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  }

  static save(data) {
    try {
      if (!data || typeof data !== 'object') return false;

      if (data.farmInfo) {
        data.farmInfo.lastUpdate = new Date().toISOString();
      }

      // Sincronizar dinámicamente la empresa activa en su respectivo companyStore
      const activeId = data.activeCompanyId || 'EMP-004';
      data.activeCompanyId = activeId;
      if (!data.companyStores) data.companyStores = {};
      if (!data.companyStores[activeId]) {
        data.companyStores[activeId] = (activeId === 'EMP-004' && DEFAULT_DATA.companyStores && DEFAULT_DATA.companyStores['EMP-004'])
          ? JSON.parse(JSON.stringify(DEFAULT_DATA.companyStores['EMP-004']))
          : this.createBlankCompanyStore();
      }
      const activeStore = data.companyStores[activeId];

      if (data.farmInfo) {
        activeStore.farmInfo = JSON.parse(JSON.stringify(data.farmInfo));
      }

      // Guardar dinámicamente todos los módulos de la empresa activa sin sobreescribir datos ricos con arrays vacíos accidentales
      COMPANY_COLLECTION_MODULES.forEach(modKey => {
        if (Array.isArray(data[modKey])) {
          if (data[modKey].length > 0 || !Array.isArray(activeStore[modKey]) || activeStore[modKey].length === 0) {
            activeStore[modKey] = JSON.parse(JSON.stringify(data[modKey]));
          }
        } else if (data[modKey] !== undefined) {
          activeStore[modKey] = JSON.parse(JSON.stringify(data[modKey]));
        }
      });

      // Guardar también cualquier módulo personalizado futuro que no sea del sistema global
      Object.keys(data).forEach(k => {
        if (!GLOBAL_SYSTEM_KEYS.includes(k) && !COMPANY_COLLECTION_MODULES.includes(k) && Array.isArray(data[k])) {
          activeStore[k] = JSON.parse(JSON.stringify(data[k]));
        }
      });

      data.companyStores[activeId] = activeStore;

      // Sellos de versión y fecha de guardado
      data._schemaVersion = DATA_SCHEMA_VERSION;
      data._appVersion = APP_CONFIG.version;
      data.lastSavedAt = new Date().toISOString();

      if (typeof localStorage !== 'undefined') {
        try {
          // Guardar almacenamiento global
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

          // BLINDAJE CAPA 1: Guardar en almacenamiento segregado específico de la empresa
          const compKey = this.getCompanyStorageKey(activeId);
          localStorage.setItem(compKey, JSON.stringify(activeStore));

          // BLINDAJE CAPA 4: Snapshot rotativo automático local (LATEST y PREV)
          const latestKey = this.getBackupStorageKey(activeId, 'LATEST');
          const prevKey = this.getBackupStorageKey(activeId, 'PREV');
          const currentLatest = localStorage.getItem(latestKey);
          if (currentLatest) {
            localStorage.setItem(prevKey, currentLatest);
          }
          localStorage.setItem(latestKey, JSON.stringify(activeStore));
        } catch (errStorage) {
          console.warn('🛡️ [BLINDAJE] Error guardando respaldo local segregado:', errStorage);
        }
      }

      // Sincronizar en segundo plano a la nube de Firebase Firestore para Web, Android e iOS
      this.syncToFirebaseCloud(data);

      return true;
    } catch (e) {
      console.error("Error guardando datos en almacenamiento:", e);
      return false;
    }
  }

  static reset() {
    localStorage.removeItem(STORAGE_KEY);
    return this.get();
  }

  static async exportJSON() {
    const data = this.get();
    const jsonStr = JSON.stringify(data, null, 2);
    const farmName = (data.farmInfo && data.farmInfo.name ? data.farmInfo.name : 'DC_Piscicola')
      .trim()
      .replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_-]/g, '_');
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const timeStr = `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`;
    const filename = `Backup_Piscicola_${farmName}_${dateStr}_${timeStr}.json`;

    // 1. Si el navegador soporta File System Access API, abrir diálogo nativo "Guardar como..." para que elija carpeta
    if ('showSaveFilePicker' in window) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: filename,
          types: [{
            description: 'Archivo de Respaldo JSON (*.json)',
            accept: { 'application/json': ['.json'] }
          }]
        });
        const writable = await handle.createWritable();
        await writable.write(jsonStr);
        await writable.close();
        if (typeof showNotification === 'function') {
          showNotification(`¡Copia de seguridad guardada exitosamente en la ubicación elegida!`, 'success');
        }
        return;
      } catch (err) {
        if (err.name === 'AbortError') return;
      }
    }

    // 2. Fallback estándar para navegadores que no soportan File System Access
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", url);
    dlAnchorElem.setAttribute("download", filename);
    document.body.appendChild(dlAnchorElem);
    dlAnchorElem.click();
    document.body.removeChild(dlAnchorElem);
    URL.revokeObjectURL(url);
    if (typeof showNotification === 'function') {
      showNotification(`¡Copia de seguridad exportada con éxito! Archivo: ${filename}`, 'success');
    }
  }

  static async importJSON(jsonString) {
    try {
      let parsed = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
      if (!parsed || typeof parsed !== 'object') return false;

      console.log('🔄 [RESTAURACIÓN DE BACKUP] Procesando archivo de respaldo...');

      // 1. Normalización de estructura multi-empresa
      if (!parsed.companyStores || typeof parsed.companyStores !== 'object') {
        parsed.companyStores = {};
      }

      const targetCompanyId = 'EMP-004';
      parsed.activeCompanyId = targetCompanyId;

      // Si los datos vienen directamente en la raíz (formato de backups anteriores)
      const hasRootData = Array.isArray(parsed.units) || Array.isArray(parsed.batches) || Array.isArray(parsed.purchases) || Array.isArray(parsed.employees);
      if (hasRootData && (!parsed.companyStores[targetCompanyId] || !Array.isArray(parsed.companyStores[targetCompanyId].units))) {
        console.log('📦 Mapeando datos históricos desde la raíz hacia El Pasito (EMP-004)...');
        const legacyStore = {
          farmInfo: parsed.farmInfo || { name: 'Piscícola Asopasito', nit: '901.890.123-5', location: 'El Paso, Cesar' },
          units: parsed.units || [],
          batches: parsed.batches || [],
          feedings: parsed.feedings || [],
          biometries: parsed.biometries || [],
          densityRecords: parsed.densityRecords || [],
          medications: parsed.medications || [],
          purchases: parsed.purchases || [],
          inventory: parsed.inventory || [],
          inventoryMovements: parsed.inventoryMovements || [],
          expenses: parsed.expenses || [],
          employees: parsed.employees || [],
          payrollPayments: parsed.payrollPayments || [],
          transfers: parsed.transfers || [],
          harvests: parsed.harvests || [],
          sales: parsed.sales || [],
          suppliers: parsed.suppliers || [],
          clients: parsed.clients || [],
          equipment: parsed.equipment || [],
          maintenanceLogs: parsed.maintenanceLogs || [],
          waterQuality: parsed.waterQuality || []
        };
        parsed.companyStores[targetCompanyId] = legacyStore;
      }

      // Si el backup contiene datos en EMP-001 (versión previa antes de la migración a EMP-004)
      if (parsed.companyStores['EMP-001'] && (!parsed.companyStores[targetCompanyId] || (parsed.companyStores[targetCompanyId].batches || []).length === 0)) {
        console.log('📦 Migrando datos operativos históricos de EMP-001 a EMP-004...');
        parsed.companyStores[targetCompanyId] = JSON.parse(JSON.stringify(parsed.companyStores['EMP-001']));
      }

      // 2. Limpieza de empresas demo residuales
      const demoIds = ['EMP-001', 'EMP-002', 'EMP-003'];
      if (Array.isArray(parsed.companies)) {
        parsed.companies = parsed.companies.filter(c => !demoIds.includes(c.id));
      }
      demoIds.forEach(id => delete parsed.companyStores[id]);

      // Asegurar que EMP-004 esté registrada
      if (!Array.isArray(parsed.companies) || parsed.companies.length === 0 || !parsed.companies.some(c => c.id === targetCompanyId)) {
        parsed.companies = JSON.parse(JSON.stringify(DEFAULT_DATA.companies));
      }

      // 3. SELLO DE TIEMPO ACTUALIZADO (CRUCIAL): Evita que Firestore descargue datos viejos
      const currentTimestamp = new Date().toISOString();
      parsed.lastSavedAt = currentTimestamp;
      if (parsed.farmInfo) parsed.farmInfo.lastUpdate = currentTimestamp;

      // 4. Asegurar que las colecciones activas de la raíz reflejen exactamente a EMP-004
      const activeStore = parsed.companyStores[targetCompanyId];
      if (activeStore) {
        if (activeStore.farmInfo) parsed.farmInfo = JSON.parse(JSON.stringify(activeStore.farmInfo));
        activeStore.farmInfo.lastUpdate = currentTimestamp;

        // Normalizar nombres de estanques manteniendo medidas intactas
        if (Array.isArray(activeStore.units)) {
          this.normalizePondAndGeoNames(activeStore.units);
        }

        COMPANY_COLLECTION_MODULES.forEach(mod => {
          if (Array.isArray(activeStore[mod])) {
            parsed[mod] = JSON.parse(JSON.stringify(activeStore[mod]));
          }
        });

        // Guardar en la clave local segregada de la empresa (Blindaje Capa 1 y 4)
        if (typeof localStorage !== 'undefined') {
          const compKey = this.getCompanyStorageKey(targetCompanyId);
          localStorage.setItem(compKey, JSON.stringify(activeStore));
          localStorage.setItem(this.getBackupStorageKey(targetCompanyId, 'LATEST'), JSON.stringify(activeStore));
        }
      }

      // 5. Guardar en almacenamiento global
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      }

      // 6. Actualizar ventana en vivo
      if (typeof window !== 'undefined' && window.appData) {
        window.appData = parsed;
      }

      // 7. Sincronizar inmediatamente a la nube de Firestore (esperando confirmación)
      if (typeof window !== 'undefined' && !window.IS_STAGING_ENV) {
        console.log('☁️ Sincronizando respaldo restaurado a la nube con timestamp actual...');
        await this.syncToFirebaseCloud(parsed);
      }

      console.log('✅ [RESTAURACIÓN EXITOSA] Copia de seguridad importada, blindada y sincronizada.');
      return true;
    } catch (e) {
      console.error("Error importando copia de seguridad:", e);
      return false;
    }
  }

  // --- REST API & PostgreSQL Synchronization ---
  static async fetchRemoteData() {
    if (!this.isServerMode()) return null;
    try {
      const res = await fetch('/api/data');
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          console.log('📡 Datos sincronizados exitosamente con PostgreSQL');
          this.save(json.data);
          return json.data;
        }
      }
    } catch (e) {
      console.warn('ℹ️ Servidor API no disponible o base de datos offline, operando con almacenamiento local:', e.message);
    }
    return null;
  }

  static async syncPost(endpoint, payload) {
    if (!this.isServerMode()) return false;
    try {
      const res = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return res.ok;
    } catch (e) {
      console.warn(`Error sincronizando ${endpoint} con PostgreSQL:`, e);
      return false;
    }
  }

  static async syncPut(endpoint, payload = {}) {
    if (!this.isServerMode()) return false;
    try {
      const res = await fetch(`/api/${endpoint}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return res.ok;
    } catch (e) {
      console.warn(`Error sincronizando PUT ${endpoint} con PostgreSQL:`, e);
      return false;
    }
  }

  static async syncDelete(endpoint, id) {
    if (!this.isServerMode()) return false;
    try {
      const res = await fetch(`/api/${endpoint}/${id}`, {
        method: 'DELETE'
      });
      return res.ok;
    } catch (e) {
      console.warn(`Error sincronizando DELETE ${endpoint}/${id} con PostgreSQL:`, e);
      return false;
    }
  }

  // --- Realtime Firebase Cloud Synchronization (Web <-> Android <-> iOS) ---
  static initFirebaseSync() {
    if (typeof window === 'undefined' || !window.firebase) {
      console.log('ℹ️ Firebase SDK no cargado en este entorno');
      return;
    }

    try {
      if (!firebase.apps.length) {
        firebase.initializeApp({
          apiKey: "AIzaSyC-LQWg2ZW3-jlhdHx8o2weFulKKyXSpdk",
          authDomain: "dc-piscicola-pro.firebaseapp.com",
          projectId: "dc-piscicola-pro",
          storageBucket: "dc-piscicola-pro.firebasestorage.app",
          messagingSenderId: "759095270994",
          appId: "1:759095270994:web:a8741aa465fb81ce31898b"
        });
      }

      if (typeof window !== 'undefined' && window.IS_STAGING_ENV) {
        console.log('🧪 [STAGING] Modo de pruebas activo: Operando en almacenamiento local aislado para pruebas seguras.');
        this.updateCloudSyncBadge(true, 'Pruebas (Aislado)');
        return;
      }

      console.log('🔥 Firebase Cloud Sync inicializado correctamente (dc-piscicola-pro)');
      this.updateCloudSyncBadge(true, 'Conectado a la Nube');

      if (firebase.firestore) {
        const db = firebase.firestore();

        // 1. Initial sync fetch on app startup
        db.collection('dc_piscicola_cloud').doc('global_sync').get().then((doc) => {
          if (doc.exists) {
            const cloudPayload = doc.data();
            if (cloudPayload && cloudPayload.lastSavedAt) {
              const localData = this.get();
              const localSavedAt = localData.lastSavedAt || '1970-01-01';
              const localEmp = localData.companyStores && localData.companyStores['EMP-004'];
              const localMissingData = !localEmp || !Array.isArray(localEmp.batches) || localEmp.batches.length === 0;
              if (cloudPayload.lastSavedAt > localSavedAt || localMissingData) {
                let remoteData = cloudPayload.dataJson ? JSON.parse(cloudPayload.dataJson) : cloudPayload.data;
                const localActiveStore = (localData.companyStores && localData.companyStores['EMP-004']) ? localData.companyStores['EMP-004'] : localData;
                const remoteActiveStore = (remoteData && remoteData.companyStores && remoteData.companyStores['EMP-004']) ? remoteData.companyStores['EMP-004'] : remoteData;
                const localScore = this.countStoreEntities(localActiveStore);
                const remoteScore = this.countStoreEntities(remoteActiveStore);
                if (remoteScore < localScore && localScore > 0 && !localMissingData) {
                  console.warn(`🛡️ [BLINDAJE ACTIVO] Rechazada descarga remota con menos registros (${remoteScore} remotos vs ${localScore} locales). Preservando datos locales y sanando la nube...`);
                  this.syncToFirebaseCloud(localData);
                  return;
                }
                console.log('☁️ Descargando versión más reciente desde la nube:', cloudPayload.lastSavedAt);
                if (remoteData && typeof remoteData === 'object' && Array.isArray(remoteData.companies) && remoteData.companies.length > 0) {
                  const demoIds = ['EMP-001', 'EMP-002', 'EMP-003'];
                  if (remoteData.companies.some(c => c.id === 'EMP-004')) {
                    remoteData.companies = remoteData.companies.filter(c => !demoIds.includes(c.id));
                    if (remoteData.companyStores) {
                      demoIds.forEach(id => delete remoteData.companyStores[id]);
                    }
                    if (demoIds.includes(remoteData.activeCompanyId) || !remoteData.activeCompanyId) {
                      remoteData.activeCompanyId = 'EMP-004';
                    }
                  }

                  if (typeof localStorage !== 'undefined') {
                    const currentRaw = localStorage.getItem(STORAGE_KEY);
                    if (currentRaw) {
                      try {
                        const snapKey = 'PISCICOLA_AUTO_SNAPSHOT_presync_' + new Date().toISOString().replace(/[:.]/g, '-');
                        localStorage.setItem(snapKey, currentRaw);
                      } catch (e) {}
                    }
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteData));
                  }
                  if (typeof window.appData !== 'undefined') {
                    window.appData = remoteData;
                    if (typeof window.renderApp === 'function') window.renderApp();
                  }
                  this.updateCloudSyncBadge(true, 'Nube Sincronizada');
                }
              }
            }
          }
        }).catch(e => console.warn('ℹ️ Error al obtener datos iniciales de la nube:', e.message));

        // 2. Real-time snapshot listener: detects updates from ANY other device in live time
        db.collection('dc_piscicola_cloud').doc('global_sync')
          .onSnapshot((doc) => {
            if (doc.exists) {
              const cloudPayload = doc.data();
              if (cloudPayload && cloudPayload.lastSavedAt) {
                const localData = this.get();
                const localSavedAt = localData.lastSavedAt || '1970-01-01';
                
                // If cloud data is newer, apply it seamlessly
                if (cloudPayload.lastSavedAt > localSavedAt && !this._isLocalSaving) {
                  console.log('🔄 Actualización en tiempo real recibida desde otro dispositivo (Web/Android/iOS):', cloudPayload.lastSavedAt);
                  let remoteData = cloudPayload.dataJson ? JSON.parse(cloudPayload.dataJson) : cloudPayload.data;

                  // BLINDAJE CAPA 2: Anti-Degradación Remota (Remote Downgrade Guard)
                  const localActiveStore = (localData.companyStores && localData.companyStores['EMP-004']) ? localData.companyStores['EMP-004'] : localData;
                  const remoteActiveStore = (remoteData && remoteData.companyStores && remoteData.companyStores['EMP-004']) ? remoteData.companyStores['EMP-004'] : remoteData;

                  const localScore = this.countStoreEntities(localActiveStore);
                  const remoteScore = this.countStoreEntities(remoteActiveStore);

                  if (remoteScore < localScore && localScore > 0) {
                    console.warn(`🛡️ [BLINDAJE ACTIVO] Rechazada actualización remota con menos registros (${remoteScore} remotos vs ${localScore} locales). Preservando datos locales y sanando la nube...`);
                    this.syncToFirebaseCloud(localData);
                    return;
                  }
                  if (remoteData && typeof remoteData === 'object' && Array.isArray(remoteData.companies) && remoteData.companies.length > 0) {
                    const demoIds = ['EMP-001', 'EMP-002', 'EMP-003'];
                    if (remoteData.companies.some(c => c.id === 'EMP-004')) {
                      remoteData.companies = remoteData.companies.filter(c => !demoIds.includes(c.id));
                      if (remoteData.companyStores) {
                        demoIds.forEach(id => delete remoteData.companyStores[id]);
                      }
                      if (demoIds.includes(remoteData.activeCompanyId) || !remoteData.activeCompanyId) {
                        remoteData.activeCompanyId = 'EMP-004';
                      }
                    }

                    if (typeof localStorage !== 'undefined') {
                      const currentRaw = localStorage.getItem(STORAGE_KEY);
                      if (currentRaw) {
                        try {
                          const snapKey = 'PISCICOLA_AUTO_SNAPSHOT_presync_' + new Date().toISOString().replace(/[:.]/g, '-');
                          localStorage.setItem(snapKey, currentRaw);
                        } catch (e) {}
                      }
                      localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteData));
                    }
                    if (typeof window.appData !== 'undefined') {
                      window.appData = remoteData;
                      if (typeof window.renderApp === 'function') {
                        window.renderApp();
                      }
                      this.updateCloudSyncBadge(true, 'Sincronizado en Vivo');
                    }
                  }
                }
              }
            }
          }, (err) => {
            console.warn('ℹ️ Firestore listener:', err.message);
          });
      }
    } catch (e) {
      console.warn('ℹ️ Inicialización de Firebase Cloud Sync:', e.message);
    }
  }

  static async syncToFirebaseCloud(data) {
    if (typeof window === 'undefined' || !window.firebase || !firebase.apps.length) return;
    if (this._isLocalSaving) return;
    if (window.IS_STAGING_ENV) {
      console.log('🧪 [STAGING] Guardado local completado en entorno de pruebas (la nube de producción permanece blindada).');
      this.updateCloudSyncBadge(true, 'Pruebas (Aislado)');
      return;
    }

    const activeId = data.activeCompanyId || 'EMP-004';
    const activeStore = (data.companyStores && data.companyStores[activeId]) || {};
    const localScore = this.countStoreEntities(activeStore);

    // BLINDAJE ULTRA: Si los datos locales están truncados o degradados (< 50 entidades para EMP-004), NUNCA sobreescribir la nube
    if (activeId === 'EMP-004' && localScore < 50) {
      console.warn(`🛡️ [BLINDAJE ULTRA] Bloqueado guardado en la nube: los datos locales de EMP-004 tienen sólo ${localScore} entidades. Se previene sobreescritura accidental.`);
      this.updateCloudSyncBadge(true, 'Protegido (Anti-degradación)');
      return;
    }

    try {
      this._isLocalSaving = true;
      this.updateCloudSyncBadge(true, 'Sincronizando...');

      const savedTimestamp = new Date().toISOString();
      data.lastSavedAt = savedTimestamp;

      if (firebase.firestore) {
        const db = firebase.firestore();
        const activeId = data.activeCompanyId || 'EMP-004';
        const activeStore = (data.companyStores && data.companyStores[activeId]) || {};
        const updater = (window.currentUser && window.currentUser.email) || 'web-client';

        // BLINDAJE CAPA 3.1: Documento propio e independiente por empresa en Firestore
        try {
          await db.collection('dc_piscicola_companies').doc(activeId).set({
            companyId: activeId,
            lastSavedAt: savedTimestamp,
            updatedBy: updater,
            companyStoreJson: JSON.stringify(activeStore)
          }, { merge: true });
        } catch (eComp) {
          console.warn('🛡️ [BLINDAJE] Error al guardar documento segregado de empresa:', eComp.message);
        }

        // BLINDAJE CAPA 3.2: Snapshot inmutable de auditoría y punto de recuperación (PITR)
        try {
          const snapshotDocId = savedTimestamp.replace(/[:.]/g, '-');
          await db.collection('dc_piscicola_companies').doc(activeId).collection('history').doc(snapshotDocId).set({
            savedAt: savedTimestamp,
            updatedBy: updater,
            companyStoreJson: JSON.stringify(activeStore)
          });
        } catch (eHist) {
          console.warn('🛡️ [BLINDAJE] Error al guardar histórico en la nube:', eHist.message);
        }

        // BLINDAJE CAPA 3.3: Sincronización global con compatibilidad hacia atrás
        await db.collection('dc_piscicola_cloud').doc('global_sync').set({
          lastSavedAt: savedTimestamp,
          updatedBy: updater,
          dataJson: JSON.stringify(data)
        }, { merge: true });

        console.log('☁️ [BLINDAJE ACTIVO] Datos sincronizados en colección multi-tenant y global:', savedTimestamp);
        this.updateCloudSyncBadge(true, 'Nube Sincronizada');
      }
    } catch (e) {
      console.warn('ℹ️ Sincronización en la nube:', e.message);
      this.updateCloudSyncBadge(false, 'Local (Offline)');
    } finally {
      setTimeout(() => {
        this._isLocalSaving = false;
      }, 800);
    }
  }

  static async forceCloudSync() {
    this.updateCloudSyncBadge(true, 'Sincronizando ahora...');
    const localData = this.get();
    await this.syncToFirebaseCloud(localData);
    alert('¡Sincronización en la nube completada! Todos tus cambios ahora están disponibles en tiempo real en Android, iOS y Web.');
  }

  static updateCloudSyncBadge(isOnline, text = '') {
    if (typeof document === 'undefined') return;
    const badge = document.getElementById('cloud-sync-badge');
    if (!badge) return;

    if (isOnline) {
      badge.className = "flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-[11px] font-bold shadow-2xs";
      badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> <span class="hidden lg:inline">${text || 'Nube Sincronizada'}</span> <i class="fa-solid fa-cloud text-emerald-600 text-[10px]"></i>`;
    } else {
      badge.className = "flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-full text-[11px] font-bold shadow-2xs";
      badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-slate-400"></span> <span class="hidden lg:inline">${text || 'Almacenamiento Local'}</span>`;
    }
  }
}

// Window attachment for accessibility
if (typeof window !== 'undefined') {
  window.PiscicolaStorage = PiscicolaStorage;
  window.DEFAULT_DATA = DEFAULT_DATA;
  window.generateBlankUnits = generateBlankUnits;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEFAULT_DATA, PiscicolaStorage, generateBlankUnits };
}

