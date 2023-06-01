USE [testdb]
Go
SET IDENTITY_INSERT [dbo].Questions ON
GO
Insert [dbo].[Questions] ([Id],[QnInWords],[ImageName],[Option1],[Option2],[Option3],[Option4],[Answer]) VALUES (1,'What does HTMLI Stand For?', Null, 'Hyper Trainer Marking Language','Hyper Text Marketing Language','Hyper Text Markup Language','Hyper Text Markup Leveler',2)
GO
Insert [dbo].[Questions] ([Id],[QnInWords],[ImageName],[Option1],[Option2],[Option3],[Option4],[Answer]) VALUES (2,'What is the first step in the software development lifecycle',Null,'System Design', 'Coding','System Testing', 'Preliminary Investigation and Analysis',3)
GO
Insert [dbo].[Questions] ([Id],[QnInWords],[ImageName],[Option1],[Option2],[Option3],[Option4],[Answer]) VALUES (3, 'Which of the following is involved in the system planning and designing phase of the Software Development Life Cycle (SDLC)',Null,'Sizing','Parallel Run','Specification freeze','All of the above',3)
GO
Insert [dbo].[Questions] ([Id],[QnInWords],[ImageName],[Option1],[Option2],[Option3],[Option4],[Answer]) VALUES (4, 'SOAP in C# stands for?',Null,'Simple Object Acccess Program','Simple Object Access Protocol','Standard Object Access Program','Standard Object Access Protocol',1) 
GO
Insert [dbo].[Questions] ([Id],[QnInWords],[ImageName],[Option1],[Option2],[Option3],[Option4],[Answer]) VALUES (5,'What is String in C# meant for?',Null,'A Variable', 'A Class', 'An Array', 'An Object', 3)
GO
Insert [dbo].[Questions] ([Id],[QnInWords],[ImageName],[Option1],[Option2],[Option3],[Option4],[Answer]) VALUES (6,'Can we use == operator to compare two strings?',Null, 'Yes','No','Maybe','So',0)
GO
Insert [dbo].[Questions] ([Id],[QnInWords],[ImageName],[Option1],[Option2],[Option3],[Option4],[Answer]) VALUES (7, 'Which is the base class of the String() Constructor?', Null, 'String','System.IO.String', 'System.Strings','System.String',3)
GO
Insert [dbo].[Questions] ([Id],[QnInWords],[ImageName],[Option1],[Option2],[Option3],[Option4],[Answer]) VALUES (8, 'Which String class operator is used to determine whether two specified strings have different values?',Null,'!=','!','~','?',0)
GO
Insert [dbo].[Questions] ([Id],[QnInWords],[ImageName],[Option1],[Option2],[Option3],[Option4],[Answer]) VALUES (9,'Aside from == operator, which method  can be used to compare two strings?', Null, 'Equals()','Compare()','Both A and B', 'None of the above',2)
GO
Insert [dbo].[Questions] ([Id],[QnInWords],[ImageName],[Option1],[Option2],[Option3],[Option4],[Answer]) VALUES (10,'Which array property is used to get the total number of elements in C#', Null, 'Len','Length','Elements','MaxLen',1)
