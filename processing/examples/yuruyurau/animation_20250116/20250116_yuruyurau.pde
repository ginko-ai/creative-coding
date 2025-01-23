a=(x,y,k=x/16-12.5,d=-5*abs(sin(k/3)*sin(y/24)))=>point((q=x/4-y/3+60+(sin(t)+d*3+3)*k*sin(d*3+t+sin(d)))*.7*cos(c=d/2+t/8)+200,(q+y/2-d*19)*.7*sin(c)+200)
t=0,draw=$=>{t||createCanvas(w=400,w);background(6).stroke(w,36);for(t+=PI/90,i=4e4;i--;)a(i%400,i/400)}#つぶやきProcessing
