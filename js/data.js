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
      farmInfo: {
        name: "Piscícola Asopasito",
        nit: "901.890.123-5",
        location: "El Paso, Cesar, Colombia",
        technicalManager: "Ing. Carlos Mendoza (DC Asesorías)",
        currency: "COP ($)",
        lastUpdate: new Date().toISOString()
      },
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
      waterQuality: []
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
        const needsRecovery = !curStore ||
          !Array.isArray(curStore.batches) || curStore.batches.length === 0 ||
          !Array.isArray(curStore.suppliers) || curStore.suppliers.length === 0 ||
          !Array.isArray(curStore.inventory) || curStore.inventory.length === 0;

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
                console.log('☁️ Descargando versión más reciente desde la nube:', cloudPayload.lastSavedAt);
                let remoteData = cloudPayload.dataJson ? JSON.parse(cloudPayload.dataJson) : cloudPayload.data;
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

