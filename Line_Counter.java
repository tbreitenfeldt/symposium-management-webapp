//Max Iniguez
//Extra Credit Attempted
//11/15/18
//This is the main line counter, it only counts and line of code that is not just white space and comments, if it has at least a '{' in 
//front of it, it will count as a line of code, it also recursively counts any sub directories 

import java.io.*;
import java.util.*;


public class Line_Counter {
	static String format="";
	 static Scanner Scan=new Scanner(System.in);
	   public static void main(String[] args) throws IOException {
		   System.out.println("What is the directory you want?");
		   String path=Scan.next();
		   System.out.println("What is the file format you want?");
	       	format=Scan.next();
	        Line_Counter fileutil = new Line_Counter();
	        fileutil.count(path);
	    }
    private int countLines(File f) throws IOException {
    	String line="";
    	int count=0;
    	boolean comment=false;
    	boolean find=false;
    	@SuppressWarnings("resource")
		BufferedReader in = new BufferedReader(new FileReader(f));
    	
		while ((line = in.readLine()) != null) 
		{
			find=true;
			String[] parts=line.split("");
			
			for(int i=0;find==true&&i<parts.length;i++) {
				if(parts[i].equals("\t"))
						find=true;
				else
					find=false;
			}
			if(parts[0].equals(""))
			find=true;
			for(int i=0;find==false&&i<parts.length;i++) {
				if(parts[i].equals("\t")) {
					;
				}
				else if(parts[i].equals(" ")) {
					;
				}
				else if(comment) {
					if(parts[i].equals("*")) {
						if(i<parts.length-1) {
						if(parts[i+1].equals("/")) {
							find=true;
							comment=false;
						}
						}
					}
				}
				else if(parts[i].equals("/")) {
					if(i<parts.length-1)
					{
					if(parts[i+1].equals("/")) {
						find=true;
					}
					else if(parts[i+1].equals("*")) {
						find=true;
						comment=true;
				}
					}
				}
				else {
					find=true;
					count++;
				}
			}
			
			if(comment)
				find=true;
		}
		return count;
	}
		 public ArrayList<File> myListFiles(String dir, ArrayList<File> list) throws IOException {
			 
		        File directory = new File(dir);
		        File[] files = directory.listFiles();
		       
		        for (File f : files) {
		        
		           if(f.isFile()) {
		        	   String fileName=f.getName();
		        	   if(fileName.contains(".") && fileName.lastIndexOf(".")!= 0)
		       		{
		       			String str=fileName.substring(fileName.lastIndexOf(".")+1);
		       			String extStr="."+str;
		       			if(str.equals(format)||extStr.equals(format))
		       			{
		       				
		       				list.add(f);
		       			}
		       		}
		           }
		           else if(f.isDirectory()) {
		        	  list=(myListFiles(f.getAbsolutePath(), list));
		           }  
		        	   
		        }
		       
		        return list;
		    }
		 
		 public void count(String path) throws IOException {
		 int allLine=0;
		 ArrayList<File>list= new ArrayList<File>();
		 list=myListFiles(path, list);
		 for(File f: list) {
		 System.out.print(f.getName());
         int currLine=countLines(f);
        System.out.println(" "+currLine);
         allLine+=currLine;
		 }
		 System.out.println(allLine);
		 }
	//create a FileFilter and override its accept-method
    FileFilter filefilter = new FileFilter() {
        public boolean accept(File file) {
        	
        	if (file.getName().endsWith(format)) {
                return true;
            }
            return false;
        }
    };
}
