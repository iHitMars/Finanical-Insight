import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const TransactionList = ({ transactions }) => {
	const [_transactions, _setTransactions] = useState(transactions);

	useEffect(() => {
		_setTransactions(transactions);
	}, []);

	// const PieChart = ({ data }) => {
	// 	const chartData = {
	// 		labels: data.map((transaction) => transaction.name),
	// 		datasets: [
	// 			{
	// 				data: data.map((transaction) => transaction.amount),
	// 				backgroundColor: [
	// 					"red",
	// 					"blue",
	// 					"green",
	// 					"yellow",
	// 					"purple",
	// 					"orange",
	// 					"pink",
	// 					"teal",
	// 				],
	// 			},
	// 		],
	// 	};

	// 	return <Pie data={chartData} />;
	// };

	return (
		<div>
			<h1>Transaction List</h1>
			<ul>
				{_transactions &&
					_transactions.map((transaction, index) => (
						<li key={index}>
							<p>
								<strong>Transaction Name:</strong> {transaction.name}
							</p>
							<p>
								<strong>Merchant Name:</strong> {transaction.merchant_name}
							</p>
							<p>
								<strong>Authorized Date:</strong> {transaction.authorized_date}
							</p>
							<p>
								<strong>Amount:</strong> {transaction.amount}
							</p>
							<p>
								<strong>Category:</strong> {transaction.category.join(", ")}
							</p>
							<p>
								<strong>Transaction Type:</strong>{" "}
								{transaction.transaction_type}
							</p>
						</li>
					))}
			</ul>

			<h2>Pie Chart</h2>
			{/* <PieChart data={transactions} /> */}
		</div>
	);
};

export default TransactionList;
