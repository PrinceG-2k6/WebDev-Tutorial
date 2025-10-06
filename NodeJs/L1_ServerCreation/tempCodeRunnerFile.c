#include <stdio.h>
int main(){
    for(int i=0;i<10;i++)
    {
        for(int j=0;j<(2*i-1);j++)
        {
            for(int k=0;k<(10-i);k++)
            {
                printf("a");
            }
            printf("b");
        }
        printf("\n");
    }

    return 0;
}