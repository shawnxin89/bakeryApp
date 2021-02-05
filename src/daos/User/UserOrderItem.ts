import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table
export class CakeOrderItem extends Model {
  
  @Column
  public name: string; 

  @Column
  public contactMethod: string;

  @Column
  public contactInfo: string;

  @Column
  public pickUpDate: Date;

  @Column
  public cakeSize: string;

  @Column
  public cakeFlavorAndFilling: string;

  @Column
  public paymentMethod: string;

  @Column
  public cakeTheme: string;

  @Column
  public budget!: string;

  @Column
  public notes!: string;
}

@Table
export class CookieOrderItem extends Model {
  
    @Column
    public name: string; 
  
    @Column
    public contactMethod: string;
  
    @Column
    public contactInfo: string;
  
    @Column
    public pickUpDate: Date;
  
    @Column
    public dozens: number;
  
    @Column
    public packageMethod: string;
  
    @Column
    public paymentMethod: string;
  
    @Column
    public cookieTheme: string;
  
    @Column
    public notes!: string;
  }