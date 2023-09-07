/*#include<iostream>
using namespace std;
int main()
{
	int arr[5],i,sum;
	float ave; 
	sum=0;
	ave=0;
	for(i=0; i<5; i++)
	{
		cout<<"Enter a values =";
		cin>>arr[i];
		sum=sum+arr[i];
	}
	ave=sum/5;
	cout<<"Sum is ="<<sum<<endl;
	cout<<"Average is ="<<ave<<endl;
	return 0;
}*/
/*#include<iostream>
using namespace std;
int main()
{
	int age[150],i,n,count;
	count=0;
	cout<<"Enter a person number =";
	cin>>n;
	cout<<"these persons are =";
	for(i=0; i<n; i++)
	{
		cin>>age[i];
		if(age[i]>=50 && age[i<=60])
		count++;
		
	}
	cout<<count;
	return 0;
}*/
/*#include<iostream>
using namespace std;
int main()
{
	int day,month,total;
	int arr[12]={30,31,31,31,31,28,30,30,31,30,31,31};
	cout<<"Enter days =";
	cin>>day;
	cout<<"Enter a months =";
	cin>>month;
	total=day;
	for(int i=1; i<month; i++)
	total=total+arr[i];
	cout<<total;
	return 0;
}*/
/*#include<iostream>
using namespace std;
int main()
{
	system("Color 70");
	int i;
	for(i=1; i<=50; i++)
	{
		cout<<".........................................................................................................................."<<endl;
		cout<<".....................................................Sunny Janjua.........................................................."<<endl;
		cout<<"-----------------------------------------------------------------------------------------------------------------------------"<<endl;
		sleep(2);
	}
	return 0;
}*/
/*#include<iostream>
using namespace std;
int main()
{
	int age[200],i,n,count;
	count=0;
	cout<<"Enter number of persons =";
	cin>>n;
	cout<<"These persons "<<n<<"is"<<endl;
	for(i=0; i<n; i++)
	{
		cin>>age[i];
		if(age[i]>50 && age[i<60])
		count++;
	}
	cout<<count<<endl;
	return 0;
}*/
/*#include<iostream>
using namespace std; 
int main()
{
	int arr[10],i,max;
	for(i=0; i<10; i++)
	{
		cout<<"Enter a values =";
		cin>>arr[i];
		
	}
	max=arr[0];
	for(i=0; i<10; i++)
	if(max<arr[i])
	max=arr[i];
	cout<<max;
	return 0;
	
}*/
/*#include<iostream>
using namespace std;
int main()
{
	int arr[10],i,min;
	for(i=0; i<10; i++)
	{
		cout<<"Enter a values =";
		cin>>arr[i];
	}
	min=arr[0];
	for(i=0; i<10; i++)
	if(min>arr[i])
	min=arr[i];
	cout<<min;
	return 0;
}*/
/*#include<iostream>
using namespace std;
int main()
{
	int arr[5],i;
	for(i=0; i<5; i++)
	{
		cout<<"Enter a values =";
		cin>>arr[i];
	}
	cout<<"Actual numbers =\n";
	for(i=0; i<5; i++)
	cout<<arr[i]<<"  ";
	cout<<endl;
	cout<<"Reverse order is =\n";
	for(i=4; i>=0; i--)
	cout<<arr[i]<<"  ";
	return 0;
}*/
/*#include<iostream>
using namespace std;
int main()
{
	int arr[2][4],i,j;
	for(i=0; i<2; i++)
	for(j=0; j<4; j++)
	{
		cout<<"Enter a values =";
		cin>>arr[i][j];
		
	}
		for(i=0; i<2; i++)
		{
				for(j=0; j<4; j++)
				cout<<arr[i][j]<<"\t";
				cout<<endl;
			
		}
	return 0;
}*/
/*#include<iostream>
using namespace std;
int main()
{
	int arr[4][7],i,j;
	for(i=0; i<4; i++)
	for(j=0; j<7; j++)
	{
		cout<<"Enter a values =";
		cin>>arr[i][j];
	}
	for(i=0; i<4; i++)
	
	{
		for(j=0; j<7; j++)
		cout<<arr[i][j]<<"   ";
		cout<<endl;
				
	}
	return 0;
}*/
/*#include<iostream>
using namespace std;
int main()
{
	int i,j,arr[2][3]={1,2,3,4,5,6};
	for(i=0; i<2; i++)
		{
		for(j=0; j<3; j++)
		cout<<arr[i][j]<<"   ";
		cout<<endl;
		}
	return 0;
}*/
#include<iostream>
using namespace std;
int main()
{
	int i,j,max,min;
	int arr[2][3]={{1,2,3},{4,5,6}};
	max=min=arr[0][0];
	for(i=0; i<2; i++)
	for(j=0; j<3; j++)
	{
		if(arr[i][j]>max)
		max=arr[i][j];
		if(arr[i][j]<min)
		min=arr[i][j];
		
	}
	cout<<"Maximun number is ="<<max<<endl;
	cout<<"Minimun number is ="<<min<<endl;
	return 0;
}






















