export  const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const summarizeDataByMonth = (transactions) => {
  const groupedTransactions = {};

  transactions && transactions.forEach(transaction => {
    const date = new Date(transaction.Date);
    const month = date.getMonth();
    const year = date.getFullYear();
    const key = `${month}-${year}`;

    if (!groupedTransactions[key]) {
      groupedTransactions[key] = {
        month: date.toLocaleString('default', { month: 'long' }),
        debit: 0,
        credit: 0,
        year: year,
      };
    }

    // Menghapus koma (,) dari string Debit dan Credit sebelum parsing
    const debitAmount = parseFloat(transaction.Debit.replace(/,/g, ''));
    const creditAmount = parseFloat(transaction.Credit.replace(/,/g, ''));

    // Memastikan nilai yang diparsing adalah angka yang valid
    if (!isNaN(debitAmount)) {
      groupedTransactions[key].debit += debitAmount;
    }
    if (!isNaN(creditAmount)) {
      groupedTransactions[key].credit += creditAmount;
    }
  });

  // Mengonversi objek menjadi array untuk mengembalikan hasil
  return Object.values(groupedTransactions);
};

export const getDataForCurrentMonth = (data) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Menggunakan indeks 0 untuk Januari, jadi ditambahkan 1
  const currentYear = currentDate.getFullYear();

  // Filtering data untuk bulan dan tahun ini
  const filteredData = data?.filter(item => {
    const itemDate = new Date(item.Date);
    const itemMonth = itemDate.getMonth() + 1;
    const itemYear = itemDate.getFullYear();
    return itemMonth === currentMonth && itemYear === currentYear;
  });

  return filteredData;
}