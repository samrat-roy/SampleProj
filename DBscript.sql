USE [MobileStore]
GO
/****** Object:  Table [dbo].[UserInfo]    Script Date: 03/11/2016 08:30:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UserInfo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [varchar](100) NOT NULL,
	[Password] [varchar](500) NOT NULL,
 CONSTRAINT [PK_UserInfo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[UserInfo] ON
INSERT [dbo].[UserInfo] ([id], [UserId], [Password]) VALUES (1, N'a.b@com', N'cGFzc3dvcmQ=')
INSERT [dbo].[UserInfo] ([id], [UserId], [Password]) VALUES (3, N'a@b.com', N'cGFzc3dvcmQ=')
SET IDENTITY_INSERT [dbo].[UserInfo] OFF
/****** Object:  Table [dbo].[BrandMaster]    Script Date: 03/11/2016 08:30:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BrandMaster](
	[BrandId] [int] IDENTITY(1,1) NOT NULL,
	[BrandName] [nvarchar](500) NOT NULL,
 CONSTRAINT [PK_BrandMaster] PRIMARY KEY CLUSTERED 
(
	[BrandId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[BrandMaster] ON
INSERT [dbo].[BrandMaster] ([BrandId], [BrandName]) VALUES (1, N'Samsung')
INSERT [dbo].[BrandMaster] ([BrandId], [BrandName]) VALUES (2, N'Nokia')
INSERT [dbo].[BrandMaster] ([BrandId], [BrandName]) VALUES (3, N'Mi')
INSERT [dbo].[BrandMaster] ([BrandId], [BrandName]) VALUES (4, N'Lenovo')
INSERT [dbo].[BrandMaster] ([BrandId], [BrandName]) VALUES (5, N'Apple')
SET IDENTITY_INSERT [dbo].[BrandMaster] OFF
/****** Object:  Table [dbo].[ProductMaster]    Script Date: 03/11/2016 08:30:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductMaster](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [nvarchar](150) NOT NULL,
	[BrandId] [int] NOT NULL,
	[ProductMiniImage] [nvarchar](250) NULL,
	[ProductMiniSummary] [nvarchar](1500) NULL,
 CONSTRAINT [PK_ProductMaster] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ProductMaster] ON
INSERT [dbo].[ProductMaster] ([ProductId], [ProductName], [BrandId], [ProductMiniImage], [ProductMiniSummary]) VALUES (1, N'SAMSUNG GALAXY J7 - GOLD', 1, N'C:\Users\sroy1\Documents\Visual Studio 2013\Projects\MobileStore\MobileStoreService\Images\Mini\samsung-galaxy-j5-sm-j500f-original-imae9cdfa4wm8gvq_2_1.jpeg', N'Secondary Camera,Touch Screen,GSM Enabled,Expandable Memory')
INSERT [dbo].[ProductMaster] ([ProductId], [ProductName], [BrandId], [ProductMiniImage], [ProductMiniSummary]) VALUES (2, N'SAMSUNG GALAXY A5 (2016 EDITION) - GOLD', 1, N'C:\Users\sroy1\Documents\Visual Studio 2013\Projects\MobileStore\MobileStoreService\Images\Mini\a5_gold.png', N'Secondary Camera,Touch Screen,GSM Enabled,Expandable Memory')
SET IDENTITY_INSERT [dbo].[ProductMaster] OFF
/****** Object:  StoredProcedure [dbo].[IsUserExsist]    Script Date: 03/11/2016 08:30:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[IsUserExsist]
@userid varchar(100)
AS
BEGIN
	SELECT COUNT(1) as result from UserInfo WHERE UserId =@userid
END
GO
/****** Object:  Table [dbo].[ServiceCentreMaster]    Script Date: 03/11/2016 08:30:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ServiceCentreMaster](
	[AddressId] [int] IDENTITY(1,1) NOT NULL,
	[BrandId] [int] NOT NULL,
	[Pin] [int] NOT NULL,
	[ContactNumber] [int] NOT NULL,
	[CentreName] [nvarchar](150) NOT NULL,
	[DetailAddress] [varchar](max) NOT NULL,
 CONSTRAINT [PK_ServiceCentreMaster] PRIMARY KEY CLUSTERED 
(
	[AddressId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[ServiceCentreMaster] ON
INSERT [dbo].[ServiceCentreMaster] ([AddressId], [BrandId], [Pin], [ContactNumber], [CentreName], [DetailAddress]) VALUES (1, 1, 560066, 12346779, N'Xyz', N'abc,xyz,abccc')
INSERT [dbo].[ServiceCentreMaster] ([AddressId], [BrandId], [Pin], [ContactNumber], [CentreName], [DetailAddress]) VALUES (2, 4, 560093, 9004368, N'bbb', N'itohjlknmbcx  kjdnbm, kjdsgn n')
SET IDENTITY_INSERT [dbo].[ServiceCentreMaster] OFF
/****** Object:  StoredProcedure [dbo].[ValidateUser]    Script Date: 03/11/2016 08:30:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE  [dbo].[ValidateUser]
@userid varchar(100),
@password varchar(500)
AS
BEGIN
	SELECT [id]
      ,[UserId]
            
  FROM [MobileStore].[dbo].[UserInfo]
  Where [UserId] = @userid AND
  [Password] =@password


END
GO
/****** Object:  StoredProcedure [dbo].[CreateUser]    Script Date: 03/11/2016 08:30:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[CreateUser]
	@userid varchar(100),
	@password varchar(500),
	@message varchar(100)out
AS
BEGIN
   
DECLARE @result int 
SELECT @result = COUNT(1)  from UserInfo WHERE UserId =@userid

IF @result <> 1 
BEGIN
   INSERT INTO [MobileStore].[dbo].[UserInfo]
           ([UserId]
           ,[Password])
     VALUES
           (@userid,
            @password)
END
ELSE
   set @message = 'user exists'
END
GO
/****** Object:  StoredProcedure [dbo].[GetBrandDetails]    Script Date: 03/11/2016 08:30:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetBrandDetails]
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT [BrandId]
      ,[BrandName]
    FROM [MobileStore].[dbo].[BrandMaster]



END
GO
/****** Object:  StoredProcedure [dbo].[Get_Service_Centre_By_Pin]    Script Date: 03/11/2016 08:30:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Get_Service_Centre_By_Pin] 
	@PinCode int,
	@BrandId int
AS
BEGIN
	SELECT       
				 ServiceCentreMaster.AddressId, 
				 ServiceCentreMaster.BrandId, 
				 ServiceCentreMaster.Pin, 
				 ServiceCentreMaster.ContactNumber, 
                 ServiceCentreMaster.CentreName, 
                 ServiceCentreMaster.DetailAddress,
                 BrandMaster.BrandName
	FROM         ServiceCentreMaster INNER JOIN
                      
                 BrandMaster ON ServiceCentreMaster.BrandId = BrandMaster.BrandId
    WHERE		 BrandMaster.BrandId =@BrandId AND ServiceCentreMaster.Pin =@PinCode
END
GO
/****** Object:  Table [dbo].[RatingMaster]    Script Date: 03/11/2016 08:30:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[RatingMaster](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[RatingSubject] [varchar](50) NULL,
	[ProductId] [int] NOT NULL,
	[Rating] [int] NOT NULL,
	[RatingDesc] [varchar](max) NULL,
	[UserName] [varchar](500) NULL,
 CONSTRAINT [PK_RatingMaster] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[RatingMaster] ON
INSERT [dbo].[RatingMaster] ([id], [RatingSubject], [ProductId], [Rating], [RatingDesc], [UserName]) VALUES (1, N'tets', 1, 1, N'ndkln', N'Sam')
INSERT [dbo].[RatingMaster] ([id], [RatingSubject], [ProductId], [Rating], [RatingDesc], [UserName]) VALUES (2, N'nfdskjfn', 1, 3, N'kf km ', N'jnlk n')
INSERT [dbo].[RatingMaster] ([id], [RatingSubject], [ProductId], [Rating], [RatingDesc], [UserName]) VALUES (3, N'nfdskjfn', 1, 3, N'kf km ', NULL)
INSERT [dbo].[RatingMaster] ([id], [RatingSubject], [ProductId], [Rating], [RatingDesc], [UserName]) VALUES (4, N'nfdskjfn', 1, 3, N'kf km ', N'Sam')
SET IDENTITY_INSERT [dbo].[RatingMaster] OFF
/****** Object:  Table [dbo].[ProductPrice]    Script Date: 03/11/2016 08:30:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductPrice](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[ProductPrice] [float] NOT NULL,
 CONSTRAINT [PK_ProductPrice] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ProductPrice] ON
INSERT [dbo].[ProductPrice] ([id], [ProductId], [ProductPrice]) VALUES (1, 1, 14999)
INSERT [dbo].[ProductPrice] ([id], [ProductId], [ProductPrice]) VALUES (2, 2, 24999)
SET IDENTITY_INSERT [dbo].[ProductPrice] OFF
/****** Object:  StoredProcedure [dbo].[SaveRatingByProductId]    Script Date: 03/11/2016 08:30:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SaveRatingByProductId]
	@RatingSubject varchar(50),
	@ProductId int,
	@Rating int,
	@RatingDesc varchar(MAX),
	@UserName varchar(500)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    INSERT INTO [dbo].[RatingMaster]
           ([RatingSubject]
           ,[ProductId]
           ,[Rating]
           ,[RatingDesc]
           ,[UserName])
     VALUES
           (@RatingSubject,
            @ProductId,
            @Rating,
            @RatingDesc,
            @UserName )




END
GO
/****** Object:  StoredProcedure [dbo].[GetRatingByProductId]    Script Date: 03/11/2016 08:30:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetRatingByProductId] 
	@productId int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

   SELECT [id]
      ,[RatingSubject]
      ,[ProductId]
      ,[Rating]
      ,[RatingDesc]
      ,[UserName]
  FROM [dbo].[RatingMaster] Where [ProductId]= @productId



END
GO
/****** Object:  StoredProcedure [dbo].[GetProductsByBrandId]    Script Date: 03/11/2016 08:30:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetProductsByBrandId]
	@Brandid int
AS
BEGIN
	SELECT pm.[ProductId]
      ,pm.[ProductName]
      ,pm.[BrandId]
      ,pm.[ProductMiniImage]
      ,pm.[ProductMiniSummary]
      ,ps.ProductPrice
      ,ps.id
  FROM [ProductMaster]pm INNER JOIN [ProductPrice] ps
  On pm.ProductId = ps.ProductId 
  WHERE pm.BrandId =@Brandid
END
GO
/****** Object:  ForeignKey [FK_ProductMaster_BrandMaster]    Script Date: 03/11/2016 08:30:25 ******/
ALTER TABLE [dbo].[ProductMaster]  WITH CHECK ADD  CONSTRAINT [FK_ProductMaster_BrandMaster] FOREIGN KEY([BrandId])
REFERENCES [dbo].[BrandMaster] ([BrandId])
GO
ALTER TABLE [dbo].[ProductMaster] CHECK CONSTRAINT [FK_ProductMaster_BrandMaster]
GO
/****** Object:  ForeignKey [FK_ProductPrice_ProductMaster]    Script Date: 03/11/2016 08:30:25 ******/
ALTER TABLE [dbo].[ProductPrice]  WITH CHECK ADD  CONSTRAINT [FK_ProductPrice_ProductMaster] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductMaster] ([ProductId])
GO
ALTER TABLE [dbo].[ProductPrice] CHECK CONSTRAINT [FK_ProductPrice_ProductMaster]
GO
/****** Object:  ForeignKey [FK_RatingMaster_ProductMaster]    Script Date: 03/11/2016 08:30:25 ******/
ALTER TABLE [dbo].[RatingMaster]  WITH CHECK ADD  CONSTRAINT [FK_RatingMaster_ProductMaster] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductMaster] ([ProductId])
GO
ALTER TABLE [dbo].[RatingMaster] CHECK CONSTRAINT [FK_RatingMaster_ProductMaster]
GO
/****** Object:  ForeignKey [FK_ServiceCentreMaster_BrandMaster]    Script Date: 03/11/2016 08:30:25 ******/
ALTER TABLE [dbo].[ServiceCentreMaster]  WITH CHECK ADD  CONSTRAINT [FK_ServiceCentreMaster_BrandMaster] FOREIGN KEY([BrandId])
REFERENCES [dbo].[BrandMaster] ([BrandId])
GO
ALTER TABLE [dbo].[ServiceCentreMaster] CHECK CONSTRAINT [FK_ServiceCentreMaster_BrandMaster]
GO
