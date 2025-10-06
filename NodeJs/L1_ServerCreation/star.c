#include <stdio.h>
int main(){
    int n = 9; // height of the diamond (must be odd for symmetry)
    int i, j, space;

    // upper part
    for(i = 1; i <= n; i += 2){
        for(space = 0; space < (n - i) / 2; space++)
            printf(" ");
        for(j = 0; j < i; j++)
            printf("*");
        printf("\n");
    }
    // lower part
    for(i = n - 2; i >= 1; i -= 2){
        for(space = 0; space < (n - i) / 2; space++)
            printf(" ");
        for(j = 0; j < i; j++)
            printf("*");
        printf("\n");
    }
    return 0;
}