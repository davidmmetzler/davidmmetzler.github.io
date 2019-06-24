import datetime
import calendar

balance = 10000
interest_paid = 0
interest_rate = 13*.01
monthly_payment = 150
payments = 0
today = datetime.date.today()
days_in_current_month = calendar.monthrange(today.year, today.month)[1]
days_till_end_of_month = days_in_current_month - today.day

start_date = today +datetime.timedelta(days= days_till_end_of_month+1)
end_date = start_date

#chug through months
while balance > 0:
    interest_charge = (interest_rate/12)* balance
    interest_paid += interest_charge
    paid_round =round(interest_paid,2)
    charge_round = round(interest_charge,2)

    balance += interest_charge
    balance -= monthly_payment
    balance = round(balance,2)
    payments +=1
    if balance < 0:
        balance = 0
    print (f'date paid:{end_date} | remaining Balance:{balance} | Interest Charged this month:{charge_round} | Total Interest Paid: {paid_round}')
    #print(end_date, balance, charge_round, paid_round)
    days_in_current_month = calendar.monthrange(end_date.year, end_date.month)[1]
    end_date = end_date + datetime.timedelta(days= days_in_current_month)
print (f'Total Payments = {payments}')

