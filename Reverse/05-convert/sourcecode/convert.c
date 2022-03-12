#include<stdio.h>
#include<string.h>

char flag[114],buf[514];
char* result="$'(('%%&'($$%'($\"\"$''''$!$%'#%(('#'(%$&(('($\"&$%'#'($(''#'(('#'!'(%(!'#'$\"$\"'($$'$\"(&%$#$!(!!#!&\"(";
//actf{I_should_have_bought_more_raspberry_pies!}

int cmp(char* src,char *target,int limit){
    for(int l1=0;l1<limit;l1++){
        if(src[l1]!=target[l1])return 0;
    }
    return 2;
}

int main(){
    int pos=0;
    printf("What's your idea?\n");
    scanf("%s",flag);
    // printf("%d!",strlen(flag));
    memset(buf,0,sizeof(buf));
    if((cmp(flag,"actf{",5)|(flag[46]=='}'))==3){
        for(int l1=5;l1<46;l1+=3){
            int tmp=0;
            if(l1+3<=46){    
                for(int l2=0;l2<3;l2++){
                    tmp<<=7;
                    tmp+=flag[l2+l1];
                }
                // printf("!!");
            }else if(l1+2==46){
                for(int l2=0;l2<2;l2++){
                    tmp<<=7;
                    tmp+=flag[l2+l1];
                }
                tmp<<=7;
            }else if(l1+1==46){
                for(int l2=0;l2<1;l2++){
                    tmp<<=7;
                    tmp+=flag[l2+l1];
                }
                tmp<<=14;
            }
            // printf("%d ",tmp);
            for(int l2=0;l2<7;l2++){
                char res=tmp&7;
                tmp>>=3;
                buf[pos]=res+'!';
                pos++;
            }

        }
        // printf("\n%s\n",buf);
    }
    if(!strcmp(buf,result)){
        printf("I think so!");
    }else{
        printf("Well, maybe you could find a better way to spend your money.");
    }
}