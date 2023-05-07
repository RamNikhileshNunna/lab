import java.io.*;
import java.util.Scanner;
class DVR
{
int i,n,j,rno,k=0,min,sum;
static int c[][]=new int[20][20];
static int t[]=new int[20];
static int d[][]=new int[20][20];
static int dis[][]=new int[20][20];
static int de[]=new int[20];
static int res[]=new int[20];
static int res1[]=new int[20];
void input()
{
Scanner o=new Scanner(System.in);
System.out.print("Enter no of nodes::");
n=o.nextInt();
System.out.println("enter the subnet representation in matrix form::");
for(i=0;i<=n-1;i++)
for(j=0;j<=n-1;j++)
c[i][j]=o.nextInt();
System.out.print("Enter the router no:");
rno=o.nextInt();
}
void discalc()
{
Scanner o=new Scanner(System.in);
rno-=1;
for(i=0;i<=n-1;i++)
{
if((c[rno][i]==1)&&(i!=rno))
{
t[k++]=i;
}
}
System.out.println("Neighbours");
for(i=0;i<k;i++)
System.out.println(t[i]);
for(i=0;i<k;i++)
{
System.out.println("Enter the router table for neighbour "+t[i]+" ");
for(j=0;j<=n-1;j++)
dis[i][j]=o.nextInt();
System.out.println("Enter the delay from "+rno+" to "+t[i]);
de[i]=o.nextInt();
}
for(i=0;i<=n-1;i++)
{
min=sum=0;
sum=dis[0][i]+de[0];
for(j=1;j<=k-1;j++)
if(sum>(dis[j][i]+de[j]))
{
sum=dis[j][i]+de[j];
min=j;
}
if(i!=rno)
{
res[i]=sum;
res1[i]=t[min];
}
else
{
res[i]=0;
res1[i]=rno;
}
}
System.out.println("The resultant routing table");
for(i=0;i<n;i++)
System.out.println(res[i]+" "+res1[i]);
}
}
class Prg8
{
public static void main(String args[])
{
DVR obj=new DVR();
obj.input();
obj.discalc();
}
}