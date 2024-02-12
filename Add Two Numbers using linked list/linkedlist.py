class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
class LinkedList():
    def __init__(self):
        self.head=None
    #insert to linkedlist
    def insert(self,data):
        new__node=Node(data)
        if self.head is None:
            self.head=new__node
        else:
            current=self.head
            while current.next is not None:
                current=current.next
            current.next=new__node
    #delete from linked list
    def delete(self,value):
        if self.head is None:
            return
        if self.head == value:
            self.head=self.head.next
            return
        current=self.head
        while current.next is not None:
            if current.next.data== value:
                current.next=current.next.next
                return
            current=current.next
    def display(self):
        current=self.head
        while current:
            print(f"[{current.data}]",end="->")
            current=current.next
        print("None")
    def search(self,value):
        
        current=self.head
        while current:
            if current.data==value:
                return True
            current=current.next

        return False
    


fruit_list=LinkedList()
num=int(input("Enter number of fruits:"))
i=0
while i<num:
    fruit_list.insert(input("Enter the name of fruit:"))
    i+=1
print("Enter item to search:")
fruit=input()
if fruit_list.search(fruit):
    print("Yes fruit exist")
else:
    print("doesn't exist")

fruit_list.display()
    
