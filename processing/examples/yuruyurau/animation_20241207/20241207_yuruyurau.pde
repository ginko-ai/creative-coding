a=(x,y,d=.5+5*cos(o=mag(k=x/8-12.5,e=y/8-12.5)**2/169))=>stroke((d*sin(k)*sin(t*4+e))**2*w,36).point(x+d*k*sin(d*2+o+t)+e*cos(e+t)+100,o*135-y/4-d*6*cos(d*3+o*9+t)+125)
t=0,draw=$=>{t||createCanvas(w=400,w);background(6);for(t+=PI/120,i=4e4;i--;)a(i%200,i/200)}#つぶやきProcessing

