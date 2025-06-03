export const getData = () => {
  const data = [
    {
      ticker: 'ADI',
      name: 'Analog Devices, Inc.',
      instrument: 'Stock',
      purchaseDate: '2024-12-30',
      averagePrice: 150,
      shares: 60,
      currentPrice: 165,
      simplePriceHistory: [160, 155, 175, 160, 185, 170, 180, 190],
      detailedPriceHistory: [
        {
          date: new Date('2025-01-01'),
          open: 137.289993,
          high: 140.039993,
          low: 136.610001,
          close: 139.279999,
          volume: 19405600,
        },
      ],
    },
    {
      ticker: 'MSFT',
      name: 'Microsoft Corp',
      instrument: 'Stock',
      purchaseDate: '2025-03-12',
      averagePrice: 160,
      shares: 47,
      currentPrice: 304,
      simplePriceHistory: [160, 155, 175, 160, 185, 170, 180, 190],
      detailedPriceHistory: [
        {
          date: new Date('2025-01-01'),
          open: 137.289993,
          high: 140.039993,
          low: 136.610001,
          close: 139.279999,
          volume: 19405600,
        },
      ],
    },
    {
      ticker: 'TSLA',
      name: 'Tesla Inc',
      instrument: 'Stock',
      purchaseDate: '2024-09-10',
      averagePrice: 30,
      shares: 25,
      currentPrice: 87,
      simplePriceHistory: [160, 155, 175, 160, 185, 170, 180, 190],
      detailedPriceHistory: [
        {
          date: new Date('2025-01-01'),
          open: 137.289993,
          high: 140.039993,
          low: 136.610001,
          close: 139.279999,
          volume: 19405600,
        },
      ],
    },
    {
      ticker: 'QCOM',
      name: 'Qualcomm Inc',
      instrument: 'Stock',
      shares: 45,
      purchaseDate: '2024-07-10',
      averagePrice: 135,
      currentPrice: 140,
    },
    {
      ticker: 'RBLX',
      name: 'Roblox Corporation',
      instrument: 'Stock',
      shares: 50,
      purchaseDate: '2024-07-10',
      averagePrice: 40,
      currentPrice: 42.5,
      timeline: [
        44.63, 42.5, 38.68, 35.7, 50.57, 52.7, 39.95, 40.38, 42.08, 38.68,
        39.95, 40.8, 41.23, 41.65, 58.23, 56.53, 55.68, 55.68, 58.65, 55.68,
        58.23, 54.83, 56.95, 58.65,
      ],
    },
    {
      ticker: 'ORCL',
      name: 'Oracle Corporation',
      instrument: 'Stock',
      shares: 50,
      purchaseDate: '2024-07-12',
      averagePrice: 88,
      currentPrice: 90,
      timeline: [
        86.4, 91.8, 92.7, 91.8, 90.9, 94.5, 116.1, 114.3, 116.1, 114.3, 114.3,
        111.6, 115.2, 109.8, 117.9, 110.7, 112.5, 117.9, 117, 97.2, 90, 94.5,
        89.1, 91.8,
      ],
    },
    {
      ticker: 'NFLX',
      name: 'Netflix Inc',
      instrument: 'Stock',
      shares: 20,
      purchaseDate: '2024-07-12',
      averagePrice: 420,
      currentPrice: 435,
      timeline: [
        413.25, 426.3, 217.5, 239.25, 230.55, 204.45, 239.25, 421.95, 439.35,
        400.2, 652.5, 669.9, 630.75, 661.2, 665.55, 665.55, 261, 252.3, 256.65,
        234.9, 256.65, 247.95, 265.35, 239.25,
      ],
    },
    {
      ticker: 'AMD',
      name: 'Advanced Micro Devices',
      instrument: 'Stock',
      shares: 30,
      purchaseDate: '2024-07-14',
      averagePrice: 105,
      currentPrice: 110,
      timeline: [
        113.3, 112.2, 116.6, 112.2, 117.7, 111.1, 113.3, 107.8, 112.2, 116.6,
        108.9, 110, 91.3, 91.3, 95.7, 130.9, 129.8, 125.4, 126.5, 125.4, 132,
        132, 106.7, 114.4,
      ],
    },
    {
      ticker: 'INTC',
      name: 'Intel Corp',
      instrument: 'Stock',
      shares: 60,
      purchaseDate: '2024-07-15',
      averagePrice: 48,
      currentPrice: 50,
      timeline: [
        48, 49.5, 43, 40.5, 43, 41.5, 42, 42, 42, 43.5, 42.5, 55, 56.5, 56.5,
        54.5, 69.5, 71.5, 69.5, 69.5, 73, 71.5, 72.5, 71, 69,
      ],
    },
    {
      ticker: 'PYPL',
      name: 'PayPal Holdings Inc',
      instrument: 'Stock',
      shares: 30,
      purchaseDate: '2024-07-25',
      averagePrice: 110,
      currentPrice: 115,
      timeline: [
        155.25, 147.2, 146.05, 132.25, 142.6, 151.8, 148.35, 146.05, 144.9,
        146.05, 141.45, 142.6, 97.75, 88.55, 87.4, 87.4, 96.6, 96.6, 93.15,
        93.15, 95.45, 93.15, 89.7, 87.4,
      ],
    },
    {
      ticker: 'SQ',
      name: 'Block Inc',
      instrument: 'Stock',
      shares: 30,
      purchaseDate: '2024-07-25',
      averagePrice: 75,
      currentPrice: 77.5,
      timeline: [
        79.83, 75.95, 78.28, 75.95, 80.6, 79.83, 77.5, 73.63, 72.85, 62, 58.13,
        60.45, 60.45, 61.23, 61.23, 60.45, 60.45, 58.9, 59.68, 62.78, 74.4,
        48.05, 44.18, 103.85,
      ],
    },
    {
      ticker: 'CRM',
      name: 'Salesforce, Inc.',
      instrument: 'Stock',
      shares: 40,
      purchaseDate: '2024-08-05',
      averagePrice: 190,
      currentPrice: 195,
      timeline: [
        189.15, 204.75, 196.95, 195, 196.95, 202.8, 185.25, 189.15, 189.15,
        193.05, 187.2, 183.3, 183.3, 183.3, 191.1, 183.3, 113.1, 117, 130.65,
        117, 115.05, 200.85, 206.7, 210.6,
      ],
    },
    {
      ticker: 'MTCH',
      name: 'Match Group Inc',
      instrument: 'Stock',
      shares: 45,
      purchaseDate: '2024-08-08',
      averagePrice: 95,
      currentPrice: 100,
      timeline: [
        99, 100, 97, 116, 123, 61, 59, 55, 59, 52, 57, 53, 53, 130, 127, 125,
        127, 54, 49, 134, 106, 113, 113, 108,
      ],
    },
    {
      ticker: 'ZM',
      name: 'Zoom Video Communications',
      instrument: 'Stock',
      shares: 40,
      purchaseDate: '2024-08-12',
      averagePrice: 110,
      currentPrice: 115,
      timeline: [
        112.7, 117.3, 92, 86.25, 93.15, 90.85, 158.7, 159.85, 159.85, 152.95,
        164.45, 141.45, 136.85, 94.3, 94.3, 92, 169.05, 167.9, 166.75, 165.6,
        163.3, 167.9, 161, 166.75,
      ],
    },
    {
      ticker: 'ADBE',
      name: 'Adobe Inc',
      instrument: 'Stock',
      shares: 15,
      purchaseDate: '2024-08-15',
      averagePrice: 480,
      currentPrice: 490,
      timeline: [
        705.6, 710.5, 720.3, 735, 739.9, 725.2, 637, 632.1, 328.3, 298.9, 656.6,
        681.1, 676.2, 700.7, 705.6, 690.9, 646.8, 641.9, 651.7, 646.8, 641.9,
        622.3, 641.9, 289.1,
      ],
    },
    {
      ticker: 'AAPL',
      name: 'Apple Inc',
      instrument: 'Stock',
      shares: 75,
      purchaseDate: '2024-08-25',
      averagePrice: 145,
      currentPrice: 150,
      timeline: [
        153, 148.5, 154.5, 151.5, 148.5, 157.5, 144, 157.5, 150, 114, 117,
        127.5, 121.5, 115.5, 124.5, 115.5, 126, 120, 117, 118.5, 123, 120, 120,
        127.5,
      ],
    },
    {
      ticker: 'LYFT',
      name: 'Lyft, Inc.',
      instrument: 'Stock',
      shares: 65,
      purchaseDate: '2024-08-25',
      averagePrice: 16,
      currentPrice: 17,
      timeline: [
        17, 17.17, 17.68, 17.51, 17, 17.51, 17, 17.85, 14.28, 13.94, 14.28,
        14.28, 14.62, 15.3, 15.47, 14.79, 14.11, 13.94, 15.47, 15.64, 14.45,
        14.79, 25.16, 24.65,
      ],
    },
    {
      ticker: 'IBM',
      name: 'IBM Corp',
      instrument: 'Stock',
      shares: 25,
      purchaseDate: '2024-09-05',
      averagePrice: 140,
      currentPrice: 142,
      timeline: [
        147.68, 213, 217.26, 211.58, 213, 201.64, 198.8, 200.22, 190.28, 201.64,
        190.28, 191.7, 203.06, 190.28, 201.64, 190.28, 190.28, 102.24, 132.06,
        139.16, 136.32, 142, 140.58, 137.74,
      ],
    },
    {
      ticker: 'NVDA',
      name: 'NVIDIA Corporation',
      instrument: 'Stock',
      shares: 40,
      purchaseDate: '2024-09-10',
      averagePrice: 450,
      currentPrice: 500,
      timeline: [
        415, 435, 415, 395, 425, 435, 405, 300, 530, 570, 545, 515, 480, 495,
        260, 240, 260, 255, 260, 245, 270, 260, 275, 245,
      ],
    },
    {
      ticker: 'TWTR',
      name: 'Twitter Inc',
      instrument: 'Stock',
      shares: 90,
      purchaseDate: '2024-09-10',
      averagePrice: 36,
      currentPrice: 38,
      timeline: [
        38, 39.52, 22.8, 23.94, 22.8, 22.42, 23.94, 21.66, 23.56, 22.04, 22.42,
        21.28, 23.18, 21.28, 21.66, 23.18, 23.56, 22.04, 22.04, 44.08, 44.46,
        23.94, 25.08, 26.6,
      ],
    },
    {
      ticker: 'MUB',
      name: 'iShares National Muni Bond ETF',
      instrument: 'ETF',
      shares: 75,
      purchaseDate: '2024-06-11',
      averagePrice: 115,
      currentPrice: 116,
      timeline: [
        117.16, 117.16, 111.36, 111.36, 111.36, 114.84, 113.68, 120.64, 118.32,
        119.48, 114.84, 111.36, 113.68, 111.36, 111.36, 113.68, 118.32, 113.68,
        113.68, 113.68, 111.36, 145, 148.48, 139.2,
      ],
    },
    {
      ticker: 'T',
      name: 'AT&T Inc.',
      instrument: 'Stock',
      shares: 100,
      purchaseDate: '2024-06-15',
      averagePrice: 20,
      currentPrice: 21.5,
      timeline: [
        20.86, 21.29, 20.43, 21.07, 21.93, 21.07, 22.14, 21.07, 20.86, 27.95,
        25.15, 25.37, 26.45, 24.94, 26.45, 26.88, 24.94, 26.02, 25.15, 26.66,
        26.66, 25.8, 26.45, 26.88,
      ],
    },
    {
      ticker: 'ADI',
      name: 'Analog Devices, Inc.',
      instrument: 'Stock',
      shares: 30,
      purchaseDate: '2024-06-17',
      averagePrice: 160,
      currentPrice: 165,
      timeline: [
        136.95, 132, 135.3, 135.3, 145.2, 145.2, 118.8, 120.45, 130.35, 115.5,
        120.45, 113.85, 115.5, 227.7, 229.35, 235.95, 234.3, 237.6, 224.4,
        229.35, 232.65, 237.6, 231, 226.05,
      ],
    },
    {
      ticker: 'AIG',
      name: 'American International Group',
      instrument: 'Stock',
      shares: 80,
      purchaseDate: '2024-06-18',
      averagePrice: 52,
      currentPrice: 53,
      timeline: [
        54.06, 53, 50.88, 50.88, 50.35, 53.53, 55.12, 50.35, 34.98, 34.98,
        51.94, 56.18, 56.18, 56.18, 56.18, 56.71, 56.18, 51.94, 63.6, 59.89,
        60.95, 60.42, 60.42, 63.6,
      ],
    },
    {
      ticker: 'DAL',
      name: 'Delta Air Lines Inc',
      instrument: 'Stock',
      shares: 70,
      purchaseDate: '2024-06-18',
      averagePrice: 40,
      currentPrice: 42,
      timeline: [
        40.32, 40.74, 43.68, 44.1, 43.26, 22.68, 24.78, 23.52, 22.26, 22.26,
        24.36, 21.42, 22.68, 22.26, 21.42, 27.72, 28.14, 55.86, 54.18, 54.6,
        55.02, 57.96, 21.42, 49.14,
      ],
    },
    {
      ticker: 'BP',
      name: 'BP plc',
      instrument: 'Stock',
      shares: 75,
      purchaseDate: '2024-06-18',
      averagePrice: 305,
      currentPrice: 315,
      timeline: [
        315, 324.45, 302.4, 236.25, 330.75, 340.2, 252, 418.95, 406.35, 444.15,
        463.05, 311.85, 327.6, 368.55, 355.95, 198.45, 189, 201.6, 195.3, 182.7,
        198.45, 220.5, 236.25, 242.55,
      ],
    },
    {
      ticker: 'MA',
      name: 'Mastercard Inc',
      instrument: 'Stock',
      shares: 15,
      purchaseDate: '2024-06-20',
      averagePrice: 350,
      currentPrice: 360,
      timeline: [
        363.6, 342, 367.2, 363.6, 374.4, 363.6, 367.2, 230.4, 205.2, 439.2,
        460.8, 460.8, 460.8, 457.2, 453.6, 460.8, 464.4, 435.6, 446.4, 435.6,
        529.2, 529.2, 540, 507.6,
      ],
    },
    {
      ticker: 'VGT',
      name: 'Vanguard Information Tech ETF',
      instrument: 'ETF',
      shares: 25,
      purchaseDate: '2024-06-20',
      averagePrice: 370,
      currentPrice: 375,
      timeline: [
        375, 510, 506.25, 480, 506.25, 491.25, 491.25, 536.25, 543.75, 562.5,
        525, 510, 513.75, 498.75, 495, 528.75, 525, 498.75, 521.25, 498.75,
        498.75, 510, 506.25, 502.5,
      ],
    },
    {
      ticker: 'PBR',
      name: 'Petrobras',
      instrument: 'Stock',
      shares: 100,
      purchaseDate: '2024-06-20',
      averagePrice: 10,
      currentPrice: 11,
      timeline: [
        11.55, 6.05, 6.16, 13.64, 13.75, 14.85, 14.19, 7.48, 7.37, 7.37, 7.7,
        7.81, 13.42, 13.64, 12.98, 15.73, 16.17, 15.51, 15.84, 15.07, 14.08,
        14.52, 14.63, 9.9,
      ],
    },
    {
      ticker: 'EUBOND',
      name: 'Eurozone 20-Year Government Bond',
      instrument: 'Bond',
      shares: 150,
      purchaseDate: '2024-06-20',
      averagePrice: 100,
      currentPrice: 101,
      timeline: [
        103.02, 97.97, 101, 103.02, 97.97, 82.82, 75.75, 74.74, 79.79, 80.8,
        80.8, 76.76, 73.73, 78.78, 74.74, 83.83, 81.81, 82.82, 81.81, 106.05,
        103.02, 108.07, 108.07, 64.64,
      ],
    },
    {
      ticker: 'CORPBOND',
      name: 'Corporate Bond Generic',
      instrument: 'Bond',
      shares: 150,
      purchaseDate: '2024-06-20',
      averagePrice: 105,
      currentPrice: 106,
      timeline: [
        104.94, 108.12, 110.24, 102.82, 107.06, 107.06, 103.88, 110.24, 136.74,
        134.62, 134.62, 128.26, 132.5, 61.48, 55.12, 58.3, 82.68, 85.86, 72.08,
        71.02, 66.78, 74.2, 75.26, 73.14,
      ],
    },
    {
      ticker: 'JNJ',
      name: 'Johnson & Johnson',
      instrument: 'Stock',
      shares: 40,
      purchaseDate: '2024-06-25',
      averagePrice: 160,
      currentPrice: 165,
      timeline: [
        160.05, 166.65, 166.65, 165, 156.75, 141.9, 156.75, 143.55, 196.35,
        188.1, 196.35, 196.35, 209.55, 214.5, 204.6, 207.9, 209.55, 211.2,
        216.15, 133.65, 122.1, 135.3, 127.05, 125.4,
      ],
    },
    {
      ticker: 'V',
      name: 'Visa Inc',
      instrument: 'Stock',
      shares: 25,
      purchaseDate: '2024-06-30',
      averagePrice: 210,
      currentPrice: 215,
      timeline: [
        215, 221.45, 210.7, 208.55, 215, 212.85, 223.6, 206.4, 223.6, 210.7,
        223.6, 219.3, 208.55, 206.4, 208.55, 208.55, 223.6, 215, 210.7, 219.3,
        208.55, 223.6, 212.85, 225.75,
      ],
    },
    {
      ticker: 'PEP',
      name: 'PepsiCo Inc',
      instrument: 'Stock',
      shares: 40,
      purchaseDate: '2024-06-30',
      averagePrice: 160,
      currentPrice: 165,
      timeline: [
        163.35, 168.3, 237.6, 245.85, 234.3, 222.75, 232.65, 163.35, 165,
        176.55, 163.35, 168.3, 161.7, 161.7, 168.3, 150.15, 148.5, 161.7, 155.1,
        161.7, 161.7, 158.4, 186.45, 176.55,
      ],
    },
    {
      ticker: 'UBER',
      name: 'Uber Technologies Inc',
      instrument: 'Stock',
      shares: 70,
      purchaseDate: '2024-06-30',
      averagePrice: 44,
      currentPrice: 46,
      timeline: [
        46, 45.54, 46, 46, 45.54, 69.92, 66.7, 68.08, 69.92, 67.62, 68.08,
        70.38, 68.08, 69.92, 44.16, 42.32, 44.62, 43.7, 45.54, 42.32, 41.4,
        45.54, 43.7, 45.08,
      ],
    },
    {
      ticker: 'XLF',
      name: 'Financial Select Sector SPDR Fund',
      instrument: 'ETF',
      shares: 75,
      purchaseDate: '2024-06-30',
      averagePrice: 33,
      currentPrice: 34.5,
      timeline: [
        50.71, 49.34, 52.09, 48.99, 49.68, 50.71, 49.34, 25.18, 24.15, 25.18,
        23.8, 25.53, 23.46, 24.84, 24.49, 46.58, 46.23, 26.22, 26.91, 43.13,
        44.85, 44.16, 45.89, 45.2,
      ],
    },
  ];

  return data.map((stock) => {
    const detailedPriceHistory = [];
    let prevClose = stock.averagePrice;
    const today = new Date();

    // generate last 365 days of OHLC+volume
    for (let i = 365; i >= 1; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const open = parseFloat(
        (prevClose * (1 + (Math.random() - 0.5) * 0.1)).toFixed(2)
      );
      const high = parseFloat((open * (1 + Math.random() * 0.05)).toFixed(2));
      const low = parseFloat((open * (1 - Math.random() * 0.05)).toFixed(2));
      const close = parseFloat((low + Math.random() * (high - low)).toFixed(2));
      const volume = Math.floor(5e6 + Math.random() * 15e6);

      detailedPriceHistory.push({ date, open, high, low, close, volume });
      prevClose = close;
    }

    // take last 30 closes for simplePriceHistory
    const simplePriceHistory = detailedPriceHistory
      .slice(-30)
      .map((entry) => entry.close);

    // averageCloseSincePurchase
    const purchaseDateObj = new Date(stock.purchaseDate);
    const closesSince = detailedPriceHistory
      .filter((entry) => entry.date >= purchaseDateObj)
      .map((entry) => entry.close);
    const averageCloseSincePurchase =
      closesSince.reduce((sum, c) => sum + c, 0) / closesSince.length;

    // latest close for currentPrice
    const latestClose =
      detailedPriceHistory[detailedPriceHistory.length - 1].close;

    return {
      ...stock,
      detailedPriceHistory,
      simplePriceHistory,
      averagePrice: parseFloat(averageCloseSincePurchase.toFixed(2)),
      currentPrice: latestClose,
    };
  });
};

/**
 * Notes:
 *
 * Display base data in data grid
 * When data grid is clicked, display the price history in an OHLC chart
 * Display Bar Chart in same chart to show volume
 * Draw cross lines for purchase price and purchase date
 * When a series item is clicked, display the priceLevel data in an additional bar chart
 */
