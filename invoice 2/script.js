document.getElementById('invoiceForm').addEventListener('submit', generateInvoice);

function generateInvoice(e) {
  e.preventDefault();

  // Get form input values
  var clientName = document.getElementById('clientName').value;
  var clientEmail = document.getElementById('clientEmail').value;
  var invoiceNumber = document.getElementById('invoiceNumber').value;
  var invoiceDate = document.getElementById('invoiceDate').value;
  var dueDate = document.getElementById('dueDate').value;
  var totalAmount = document.getElementById('totalAmount').value;
  var itemDescription = document.getElementById('itemDescription').value;

  // Generate invoice HTML
  var invoiceHTML = `
    <h2>Invoice</h2>
    <p><strong>Client:</strong> ${clientName}</p>
    <p><strong>Email:</strong> ${clientEmail}</p>
    <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
    <p><strong>Invoice Date:</strong> ${invoiceDate}</p>
   
