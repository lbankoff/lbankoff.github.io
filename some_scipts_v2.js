var price = document.getElementById("Price Value");
  
function GetPrice(seat, row)
{
	if(row == 01)
	{
		if(seat >= 01 && seat <= 32)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 3000 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 02)
	{
		if(seat >= 01 && seat <= 34)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 3000 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 03)
	{
		if(seat >= 01 && seat <= 03 || seat >= 36 && seat <= 38)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2500 ������.";
		else if(seat >= 04 && seat <= 35)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2800 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 04)
	{
		if(seat >= 01 && seat <= 04 || seat >= 37 && seat <= 41)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2500 ������.";
		else if(seat >= 05 && seat <= 36)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2800 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 05)
	{
		if(seat >= 01 && seat <= 06 || seat >= 39 && seat <= 44)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2500 ������.";
		else if(seat >= 07 && seat <= 38)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2800 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 06)
	{
		if(seat >= 01 && seat <= 07 || seat >= 40 && seat <= 46)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2200 ������.";
		else if(seat >= 08 && seat <= 39)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2500 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 07)
	{
		if(seat >= 01 && seat <= 07 || seat >= 40 && seat <= 46)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2200 ������.";
		else if(seat >= 08 && seat <= 39)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2500 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 08)
	{
		if(seat >= 01 && seat <= 07 || seat >= 40 && seat <= 48)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2200 ������.";
		else if(seat >= 08 && seat <= 39)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2500 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 09)
	{
		if(seat >= 01 && seat <= 07 || seat >= 40 && seat <= 48)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2200 ������.";
		else if(seat >= 08 && seat <= 39)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2500 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 10)
	{
		if(seat >= 01 && seat <= 07 || seat >= 41 && seat <= 49)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2000 ������.";
		else if(seat >= 08 && seat <= 40)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2200 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 11)
	{
		if(seat >= 01 && seat <= 07 || seat >= 41 && seat <= 50)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2000 ������.";
		else if(seat >= 08 && seat <= 40)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2200 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 12)
	{
		if(seat >= 01 && seat <= 07 || seat >= 41 && seat <= 50)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2000 ������.";
		else if(seat >= 08 && seat <= 40)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2200 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 13)
	{
		if(seat >= 01 && seat <= 07 || seat >= 43 && seat <= 51)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2000 ������.";
		else if(seat >= 08 && seat <= 42)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2200 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 14)
	{
		if(seat >= 01 && seat <= 07 || seat >= 43 && seat <= 52)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2000 ������.";
		else if(seat >= 08 && seat <= 42)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2200 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 15)
	{
		if(seat >= 01 && seat <= 10 || seat >= 43 && seat <= 52)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1800 ������.";
		else if(seat >= 11 && seat <= 42)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2000 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 16)
	{
		if(seat >= 01 && seat <= 10 || seat >= 43 && seat <= 52)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1800 ������.";
		else if(seat >= 11 && seat <= 42)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2000 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 17)
	{
		if(seat >= 01 && seat <= 10 || seat >= 43 && seat <= 52)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1800 ������.";
		else if(seat >= 11 && seat <= 42)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 2000 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 18)
	{
		if(seat >= 01 && seat <= 10 || seat >= 43 && seat <= 52)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1500 ������.";
		else if(seat >= 11 && seat <= 42)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1800 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 19)
	{
		if(seat >= 01 && seat <= 10 || seat >= 43 && seat <= 52)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1500 ������.";
		else if(seat >= 11 && seat <= 42)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1800 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 20)
	{
		if(seat >= 01 && seat <= 13 || seat >= 41 && seat <= 53)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1200 ������.";
		else if(seat >= 14 && seat <= 40)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1500 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 21)
	{
		if(seat >= 01 && seat <= 14 || seat >= 42 && seat <= 55)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1200 ������.";
		else if(seat >= 15 && seat <= 41)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1500 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 22)
	{
		if(seat >= 01 && seat <= 14 || seat >= 42 && seat <= 55)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1200 ������.";
		else if(seat >= 15 && seat <= 41)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1500 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 23)
	{
		if(seat >= 01 && seat <= 14 || seat >= 42 && seat <= 55)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1200 ������.";
		else if(seat >= 15 && seat <= 41)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1500 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 24)
	{
		if(seat >= 01 && seat <= 14 || seat >= 42 && seat <= 55)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1000 ������.";
		else if(seat >= 15 && seat <= 41)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1200 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 25)
	{
		if(seat >= 01 && seat <= 14 || seat >= 42 && seat <= 55)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1000 ������.";
		else if(seat >= 15 && seat <= 41)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1200 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 26)
	{
		if(seat >= 01 && seat <= 14 || seat >= 37 && seat <= 50)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1000 ������.";
		else if(seat >= 15 && seat <= 36)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1200 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	if(row == 27)
	{
		if(seat >= 01 && seat <= 14 || seat >= 40 && seat <= 53)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1000 ������.";
		else if(seat >= 15 && seat <= 39)
			document.getElementById("Price Value").innerHTML = "��� - " + row + ". ����� - " + seat + ". ��������� ������ - 1200 ������.";
		else
			document.getElementById("Price Value").innerHTML = "�������� ��� � �����, ����� ������ ����";
	}
	
	
}